<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Student extends Model
{
    use HasFactory, HasUuids;

    protected $fillable = [
        'applicant_id', 'team_id', 'role_in_team', 'performance_score',
    ];

    protected $casts = [
        'performance_score' => 'decimal:2',
    ];

    /**
     * The original application data for this student.
     */
    public function applicant(): BelongsTo
    {
        return $this->belongsTo(Applicant::class);
    }

    /**
     * The team this student is assigned to (nullable until the Forge phase).
     */
    public function team(): BelongsTo
    {
        return $this->belongsTo(Team::class);
    }
}
