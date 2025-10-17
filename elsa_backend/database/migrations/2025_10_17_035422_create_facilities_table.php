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
        Schema::create('facilities', function (Blueprint $table) {
    $table->id();
    $table->string('title'); // Contoh: Uji Model Fisik Dinamika Pantai
    $table->string('slug')->unique(); // Untuk URL: /fasilitas/{slug}
    $table->string('image'); // Path gambar utama (fasilitas1.jpeg)
    $table->string('status')->default('Available'); // Contoh: Available
    $table->string('detail_type'); // 'FasilitasDetail1', 'FasilitasDetail2', dll. -> Digunakan untuk menentukan Resource/View detail mana yang terkait.
    $table->unsignedBigInteger('detail_id')->nullable(); // ID dari record detail di tabel terkait (polymorphic relation)
    $table->integer('sort_order')->default(0); // Untuk pengurutan
    $table->timestamps();
});
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('facilities');
    }
};
