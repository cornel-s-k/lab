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
            
            // --- 1. Untuk Daftar Layanan Utama (Agar bisa diubah admin) ---
            // Kita gunakan JSON field untuk menyimpan list item utama (4 item)
            // Contoh JSON: ["Mekanika Tanah", "Data Lapangan: Struktur...", ...]
            $table->json('core_services')->nullable(); 

            // --- 2. Untuk Layanan Sub-Laboratorium Mekanika Tanah (Data Kompleks) ---
            // Kita gunakan JSON field lagi untuk menyimpan array of objects
            // yang berisi detail 4 jenis uji lab. Ini adalah bagian yang paling penting.
            
            /*
            Contoh Struktur JSON:
            [
                {
                    "title": "Uji Kadar Air Tanah (Soil Water Content Test)",
                    "method": "SNI 03-1965-1990 dan/atau ASTM D2216-98",
                    "description": "Untuk mengetahui kadar air dari suatu sampel tanah...",
                    "images": ["path/to/img1.jpeg", "path/to/img2.jpeg", ...] // Array path untuk 6 gambar
                },
                // ... objek untuk 3 uji lainnya
            ]
            */
            $table->json('sub_lab_services')->nullable(); 
            
            // Kolom opsional untuk teks utama di bawah judul (deskripsi singkat)
            $table->text('short_description')->nullable(); 
            
            // Kolom untuk gambar utama fasilitas 3
            $table->string('main_image_path')->nullable(); 

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