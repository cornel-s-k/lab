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
       Schema::create('settings', function (Blueprint $table) {
    $table->id();
    $table->string('site_title')->nullable(); // Judul website
    $table->string('tagline')->nullable(); // Tagline
    $table->text('about_us')->nullable(); // Isi tentang kami
    $table->string('video_url')->nullable(); // Link video profil
    $table->string('survey_url')->nullable(); // Link Google Form
    $table->string('elsa_url')->nullable(); // Link ke ELSA
    $table->string('timeline_url')->nullable(); // Link Spreadsheet
    $table->timestamps();
});

    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('settings');
    }
};
