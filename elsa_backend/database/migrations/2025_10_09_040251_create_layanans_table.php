<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('layanans', function (Blueprint $table) {
            $table->id();
            // Title (e.g., "Sub Lab Model Fisik Dinamika Pantai")
            $table->string('title'); 
            // Description (e.g., "Paket Pengujian Model Fisik...")
            $table->string('description'); 
            // Link eksternal (URL tujuan)
            $table->string('link'); 
            // Path gambar (diupload via Filament)
            $table->string('image')->nullable(); 
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('layanans');
    }
};