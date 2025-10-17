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
        Schema::create('layanan_data', function (Blueprint $table) {
    $table->id();
    $table->string('name')->unique(); // Nama Layanan (e.g., Model Fisik Dinamika Pantai)
    $table->integer('value')->default(0); // Jumlah Ahli/Pengelola
    $table->timestamps();
});
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('layanan_data');
    }
};
