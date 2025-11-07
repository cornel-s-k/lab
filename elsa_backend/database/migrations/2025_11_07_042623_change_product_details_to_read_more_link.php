<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     * Menghapus kolom 'details' dan menambahkan kolom 'read_more_link'.
     */
    public function up(): void
    {
        Schema::table('products', function (Blueprint $table) {
            // Hapus kolom 'details' yang sudah tidak terpakai
            $table->dropColumn('details');
            
            // Tambahkan kolom 'read_more_link' dengan tipe string (URL)
            $table->string('read_more_link')->nullable()->after('image_path');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('products', function (Blueprint $table) {
            // Untuk rollback: hapus kolom baru dan kembalikan kolom lama (json)
            $table->dropColumn('read_more_link');
            $table->json('details')->nullable()->after('image_path');
        });
    }
};