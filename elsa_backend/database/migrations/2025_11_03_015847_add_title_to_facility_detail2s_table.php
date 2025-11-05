<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     * Menambahkan semua kolom detail yang hilang sekaligus:
     * title, lead_text, dan main_image.
     * Kolom software_list dan service_items sudah ada di migration create.
     */
    public function up(): void
    {
        // Karena batasan SQLite, kita memisahkan setiap ADD COLUMN 
        // ke dalam closure Schema::table yang berbeda.
        
        // 1. Tambahkan kolom 'title'
        Schema::table('facility_detail2s', function (Blueprint $table) {
            // Menggunakan tipe string dan diletakkan setelah 'id'
            $table->string('title')->nullable()->after('id');
        });

        // 2. Tambahkan kolom 'lead_text'
        Schema::table('facility_detail2s', function (Blueprint $table) {
            // Menggunakan tipe text
            $table->text('lead_text')->nullable()->after('title');
        });

        // 3. Tambahkan kolom 'main_image'
        Schema::table('facility_detail2s', function (Blueprint $table) {
            // Menggunakan tipe string untuk path file
            $table->string('main_image')->nullable()->after('lead_text');
        });
    }

    /**
     * Reverse the migrations.
     * Mengembalikan perubahan yang dilakukan di atas.
     */
    public function down(): void
    {
        Schema::table('facility_detail2s', function (Blueprint $table) {
            // Hapus semua kolom yang ditambahkan saat rollback
            $table->dropColumn(['title', 'lead_text', 'main_image']);
        });
    }
};