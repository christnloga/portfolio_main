<?php

use App\Http\Controllers\Api\ApplicantController;
use App\Http\Controllers\Api\CaseStudyController;
use Illuminate\Support\Facades\Route;

Route::apiResource('case-studies', CaseStudyController::class)->names('api.case-studies');
Route::patch('/case-studies/{case_study}/publish', [CaseStudyController::class, 'togglePublish'])->name('api.case-studies.publish');
Route::get('/applicants', [ApplicantController::class, 'index'])->name('api.applicants.index');
Route::patch('/applicants/{applicant}/status', [ApplicantController::class, 'updateStatus'])->name('api.applicants.update-status');

Route::prefix('admin')->group(function () {
    Route::post('/upload-image', [\App\Http\Controllers\Api\ImageUploadController::class, 'store'])->name('api.admin.upload-image');
});
