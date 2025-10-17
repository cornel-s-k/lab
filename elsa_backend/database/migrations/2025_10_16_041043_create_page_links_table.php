<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('page_links', function (Blueprint $table) {
            $table->id();
            $table->string('name'); // Survey, Timeline, Capaian ELSA, Video
            $table->string('link')->nullable();
            $table->string('video_path')->nullable(); // simpan path file video
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('page_links');
    }
};
