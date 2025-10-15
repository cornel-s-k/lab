<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Storage; // Import Storage

class Berita extends Model
{
    use HasFactory;

    protected $fillable = [
        'judul',
        'isi', // Ganti 'content' dengan 'isi' agar sesuai dengan form
        'gambar', // Kolom di DB
        // 'slug', // Jika Anda tidak menggunakannya, hilangkan
    ];

    // Kolom yang harus dikonversi menjadi tipe data tertentu saat diambil
    protected $casts = [
        'created_at' => 'datetime', // Untuk kemudahan format tanggal
    ];


    // Accessor untuk mendapatkan URL gambar (berita.image)
    // Pastikan `gambar` disimpan di storage (misal: 'public/berita-images')
    public function getImageUrlAttribute()
    {
        // Asumsi gambar disimpan di disk 'public'
        // dan folder yang digunakan adalah 'berita-images'
        if ($this->gambar) {
            // Gunakan Storage::url() untuk mendapatkan URL publik
            return Storage::url($this->gambar);
        }

        // URL gambar placeholder jika tidak ada gambar
        return asset('images/placeholder-berita.jpg'); // Sesuaikan dengan path placeholder Anda
    }

    // Accessor untuk memberikan alias 'published_at' ke 'created_at' (untuk frontend)
    public function getPublishedAtAttribute()
    {
        // Menggunakan library Carbon untuk memformat tanggal
        return $this->created_at ? $this->created_at->isoFormat('D MMMM YYYY') : null;
    }
}