<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Team extends Model
{
    use HasFactory, HasUuids;

    protected $fillable = [
        'team_name', 'mentor_notes', 'project_id',
    ];

    /**
     * The project this team is tasked with solving.
     */
    public function project(): BelongsTo
    {
        return $this->belongsTo(Project::class);
    }

    /**
     * The students assigned to this team (max 5 in practice).
     */
    public function students(): HasMany
    {
        return $this->hasMany(Student::class);
    }

    /**
     * The timeline of presentation milestones for this team.
     */
    public function milestones(): HasMany
    {
        return $this->hasMany(PresentationMilestone::class);
    }
}
