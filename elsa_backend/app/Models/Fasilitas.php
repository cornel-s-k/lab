<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Storage; // WAJIB DIIMPOR

class Fasilitas extends Model
{
    use HasFactory;

    protected $table = 'fasilitas';
    protected $fillable = [
        'judul',
        'deskripsi_singkat',
        'deskripsi_lengkap',
        'gambar', 
    ];

    // Tambahkan ini
    protected $appends = ['gambar_url']; 

    public function getGambarUrlAttribute()
    {
        if ($this->gambar) {
            // PASTIKAN Anda sudah menjalankan 'php artisan storage:link'
            return asset(Storage::url($this->gambar)); 
        }
        return null;
    }
}
