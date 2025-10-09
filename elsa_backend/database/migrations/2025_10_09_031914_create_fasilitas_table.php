<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up()
{
    Schema::create('fasilitas', function (Blueprint $table) {
        $table->id();
        $table->string('judul'); // Uji Model Fisik, Simulasi Hidro-Oseanografi, dll.
        $table->longText('deskripsi_singkat'); // Deskripsi singkat untuk card
        $table->longText('deskripsi_lengkap')->nullable(); // Semua detail spesifikasi
        $table->string('gambar')->nullable();
        $table->timestamps();
    });
}
};
