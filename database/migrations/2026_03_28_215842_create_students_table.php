<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('students', function (Blueprint $table) {
            $table->uuid('id')->primary();
            // Links the accepted applicant to the student record
            $table->foreignUuid('applicant_id')->constrained('applicants')->cascadeOnDelete();
            // Nullable because they might be accepted before being assigned to a team
            $table->foreignUuid('team_id')->nullable()->constrained('teams')->nullOnDelete();
            $table->string('role_in_team')->nullable();
            $table->decimal('performance_score', 5, 2)->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('students');
    }
};
