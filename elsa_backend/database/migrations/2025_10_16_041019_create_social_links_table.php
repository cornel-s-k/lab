<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('social_links', function (Blueprint $table) {
            $table->id();
            $table->string('platform'); // WhatsApp, Instagram, Twitter, LinkedIn
            $table->string('username')->nullable();
            $table->string('link')->nullable();
            $table->string('phone_number')->nullable(); // hanya untuk WA
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('social_links');
    }
};
