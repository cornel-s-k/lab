<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Faq extends Model
{
    use HasFactory;

    /**
     * Properti ini harus diatur ke FALSE karena tabel 'faqs'
     * tidak memiliki kolom 'created_at' dan 'updated_at' di migrasi.
     */
    public $timestamps = false; 

    /**
     * The attributes that are mass assignable.
     * Pastikan kolom-kolom yang ada di form Filament sudah terdaftar.
     */
    protected $fillable = [
        'pertanyaan',
        'jawaban',
    ];
}
