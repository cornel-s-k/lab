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
        Schema::create('facility_detail3s', function (Blueprint $table) {
            $table->id();
            
            // Kolom Wajib untuk identifikasi dan tampilan judul
            $table->string('title')->nullable();
            
            // Kolom opsional untuk teks utama di bawah judul (deskripsi singkat/lead text)
            $table->text('short_description')->nullable(); 
            
            // Kolom untuk gambar utama fasilitas 3 (Path file utama)
            $table->string('main_image_path')->nullable(); 
            
            // --- 1. Untuk Daftar Layanan Utama (misalnya 4 item list) ---
            $table->json('core_services')->nullable(); 

            // --- 2. Untuk Layanan Sub-Laboratorium Mekanika Tanah ---
            // Menyimpan Array of Objects kompleks, termasuk array 'images' (Frame Gambar)
            // Kolom ini SANGAT AMAN dibuat nullable (tidak wajib diisi)
            $table->json('sub_lab_services')->nullable(); 
            
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('facility_detail3s');
    }
};
