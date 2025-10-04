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
            $table->string('name', 150); // Nama fasilitas
            $table->enum('status', ['Available', 'Unavailable'])->default('Available'); 
            $table->string('photo_url')->nullable(); // Foto
            $table->text('short_description')->nullable(); // deskripsi singkat
            $table->longText('details')->nullable(); // detail panjang
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
