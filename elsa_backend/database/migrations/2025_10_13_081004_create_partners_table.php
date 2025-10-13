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
        // Tabel untuk Mitra Kerjasama
        Schema::create('partners', function (Blueprint $table) {
            $table->id();
            $table->string('name');             // Nama Mitra (Contoh: Universitas Gadjah Mada)
            $table->string('logo_url');         // URL Logo Mitra (bisa link eksternal atau storage path)
            $table->integer('order_index')->nullable(); // Untuk mengurutkan tampilan logo
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('partners');
    }
};
