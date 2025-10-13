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
        // Tabel untuk Timeline Sejarah
        Schema::create('histories', function (Blueprint $table) {
            $table->id();
            $table->string('year', 4);                 // Tahun kejadian (Contoh: '1982')
            $table->text('description');               // Deskripsi peristiwa
            $table->boolean('is_highlight')->default(false); // Untuk tipe 'highlight' di frontend
            $table->integer('order_index')->nullable(); // Untuk custom sorting, jika perlu
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('histories');
    }
};
