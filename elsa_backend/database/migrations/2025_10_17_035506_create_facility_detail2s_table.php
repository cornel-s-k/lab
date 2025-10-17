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
        Schema::create('facility_detail2s', function (Blueprint $table) {
    $table->id();
    $table->json('software_list'); // Daftar software yang digunakan
    $table->json('service_items'); // Daftar Layanan Pengujian & Pemodelan (Judul, Deskripsi, Gambar)
    $table->timestamps();
});
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('facility_detail2s');
    }
};
