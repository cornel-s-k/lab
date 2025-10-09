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
        Schema::create('hkps', function (Blueprint $table) {
            $table->id();
            
            // Kolom untuk JUDUL dan KODE UNIK
            $table->string('code')->unique(); // Contoh: HKPL-MFDP, wajib unik
            $table->string('title');        // Judul lengkap, misal: Hak dan Kewajiban Pengguna Layanan Model Fisik...
            
            // Kolom untuk KONTEN PANJANG (RichEditor di Filament)
            $table->longText('hak_content');       // Isi konten Hak Pengguna
            $table->longText('kewajiban_content'); // Isi konten Kewajiban Pengguna
            
            // Kolom untuk GAMBAR/BANNER (FileUpload di Filament)
            $table->string('image')->nullable(); // Boleh kosong (nullable)
            
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('hkps');
    }
};