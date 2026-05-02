<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class PresentationMilestone extends Model
{
    use HasFactory, HasUuids;

    protected $fillable = [
        'team_id', 'milestone_name', 'status', 'completion_date',
    ];

    protected $casts = [
        'completion_date' => 'date',
    ];

    /**
     * The team this milestone belongs to.
     */
    public function team(): BelongsTo
    {
        return $this->belongsTo(Team::class);
    }
}
