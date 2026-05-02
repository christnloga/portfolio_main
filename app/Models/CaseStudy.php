<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Storage;

class CaseStudy extends Model
{
    use HasFactory;

    protected $keyType = 'string';

    public $incrementing = false;

    protected $fillable = [
        'title', 'category', 'slug', 'client_name', 'short_description', 'cover_image_url',
        'roles', 'tech_stack', 'content_blocks', 'start_date', 'end_date', 'is_published',
    ];

    protected $casts = [
        'roles' => 'array',
        'tech_stack' => 'array',
        'content_blocks' => 'array',
        'start_date' => 'date',
        'end_date' => 'date',
        'is_published' => 'boolean',
    ];

    protected function getStorageDisk(): string
    {
        return app()->environment('production') ? 's3' : 'public';
    }

    protected function coverImageUrl(): Attribute
    {
        return Attribute::make(
            get: function (?string $value) {
                if (! $value) {
                    return null;
                }
                // If it already starts with http, return it (external or already full URL)
                if (str_starts_with($value, 'http')) {
                    return $value;
                }

                return Storage::disk($this->getStorageDisk())->url($value);
            },
            set: function (?string $value) {
                if (! $value) {
                    return null;
                }
                // Strip the base url before storing
                $baseUrl = Storage::disk($this->getStorageDisk())->url('');

                return str_replace($baseUrl, '', $value);
            }
        );
    }

    protected function contentBlocks(): Attribute
    {
        return Attribute::make(
            get: function (?string $value) {
                if (! $value) {
                    return [];
                }
                $blocks = json_decode($value, true) ?? [];

                $baseUrl = Storage::disk($this->getStorageDisk())->url('');

                foreach ($blocks as &$block) {
                    if (in_array($block['type'], ['image', 'gallery']) && isset($block['data']['url'])) {
                        $url = $block['data']['url'];
                        if (! str_starts_with($url, 'http')) {
                            $block['data']['url'] = $baseUrl.$url;
                        }
                    }

                    if ($block['type'] === 'gallery' && isset($block['data']['images'])) {
                        foreach ($block['data']['images'] as &$image) {
                            if (isset($image['url']) && ! str_starts_with($image['url'], 'http')) {
                                $image['url'] = $baseUrl.$image['url'];
                            }
                        }
                    }
                }

                return $blocks;
            },
            set: function ($value) {
                $blocks = is_string($value) ? json_decode($value, true) : $value;
                if (! is_array($blocks)) {
                    return json_encode([]);
                }

                $baseUrl = Storage::disk($this->getStorageDisk())->url('');

                foreach ($blocks as &$block) {
                    if (in_array($block['type'], ['image', 'gallery']) && isset($block['data']['url'])) {
                        $block['data']['url'] = str_replace($baseUrl, '', $block['data']['url']);
                    }

                    if ($block['type'] === 'gallery' && isset($block['data']['images'])) {
                        foreach ($block['data']['images'] as &$image) {
                            if (isset($image['url'])) {
                                $image['url'] = str_replace($baseUrl, '', $image['url']);
                            }
                        }
                    }
                }

                return json_encode($blocks);
            }
        );
    }

    public function getRouteKeyName(): string
    {
        return 'slug';
    }

    protected static function boot()
    {
        parent::boot();
        static::creating(function ($model) {
            if (empty($model->{$model->getKeyName()})) {
                $model->{$model->getKeyName()} = (string) \Illuminate\Support\Str::uuid();
            }
        });
    }
}
