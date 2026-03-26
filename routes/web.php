<?php

use Illuminate\Support\Facades\Route;
use Laravel\Fortify\Features;

use App\Http\Middleware\SetLocale;
use Illuminate\Http\Request;

Route::get('/', function (Request $request) {
    $locale = $request->getPreferredLanguage(['en', 'fr']) ?? 'fr';
    return redirect("/{$locale}");
});

Route::group([
    'prefix' => '{locale}',
    'where' => ['locale' => 'en|fr'],
    'middleware' => [SetLocale::class]
], function () {
    Route::inertia('/', 'Home')->name('home');

    Route::inertia('/about', 'About')->name('page.about');
    Route::inertia('/contact', 'Contact')->name('page.contact');
    Route::middleware(['auth', 'verified'])->group(function () {
        Route::inertia('dashboard', 'dashboard')->name('dashboard');
    });
});


require __DIR__.'/settings.php';
