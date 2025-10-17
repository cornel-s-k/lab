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
        Schema::create('facility_detail1s', function (Blueprint $table) 
 {
    $table->id();
    // Kolam Gelombang
    $table->string('pool_dimen'); // 30 m × 55 m × 1.2 m
    $table->string('pool_wavemaker_image'); // Path gambar wavemaker Kolam
    $table->json('pool_specs'); // JSON array untuk menyimpan list spek
    
    // Saluran Kaca
    $table->string('glass_dimen');
    $table->string('glass_wavemaker_image');
    $table->json('glass_specs');
    
    // Saluran Beton
    $table->string('concrete_dimen');
    $table->string('concrete_wavemaker_image');
    $table->json('concrete_specs');
    
    // Tsunami
    $table->string('tsunami_dimen');
    $table->string('tsunami_image');
    $table->text('tsunami_description');
    $table->json('tsunami_specs');

    // Tipe Gelombang
    $table->json('wave_types_regular');
    $table->json('wave_types_irregular');
    
    $table->timestamps();
});
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('facility_detail1s');
    }
};
