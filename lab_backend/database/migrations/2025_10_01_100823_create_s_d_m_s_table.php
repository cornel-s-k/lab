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
    Schema::create('s_d_m_s', function (Blueprint $table) {
        $table->id();
        $table->string('kategori');   // contoh: "S3", "S2", "S1", "D3", "SLTA"
        $table->integer('jumlah');    // jumlah SDM
        $table->string('jenis');      // contoh: "kualifikasi", "tugas_belajar", "layanan"
        $table->timestamps();
    });
}

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('s_d_m_s');
    }
};
