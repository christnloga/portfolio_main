<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Project extends Model
{
    use HasFactory, HasUuids;

    protected $fillable = [
        'title', 'description', 'target_sector', 'is_award_winner',
    ];

    protected $casts = [
        'is_award_winner' => 'boolean',
    ];

    /**
     * A project can have multiple teams working on it.
     */
    public function teams(): HasMany
    {
        return $this->hasMany(Team::class);
    }
}
