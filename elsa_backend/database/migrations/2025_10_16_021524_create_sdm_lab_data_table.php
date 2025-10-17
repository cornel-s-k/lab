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
        Schema::create('sdm_lab_data', function (Blueprint $table) {
    $table->id();
    $table->string('name')->unique(); // Kualifikasi (e.g., S3, S2, SLTA)
    $table->integer('value')->default(0); // Jumlah SDM
    $table->timestamps();
});
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('sdm_lab_data');
    }
};
