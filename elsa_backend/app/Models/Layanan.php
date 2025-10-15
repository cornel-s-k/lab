<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Storage; // Tambahkan ini

class Layanan extends Model
{
    protected $fillable = [
        'title',
        'description',
        'link',
        'image',
    ];
    
    // Tambahkan Accessor untuk memastikan data API mengirim URL gambar yang lengkap.
    
    /**
     * The accessors to append to the model's array form.
     *
     * @var array
     */
    protected $appends = ['image_url'];

    /**
     * Accessor untuk mendapatkan URL gambar lengkap yang siap pakai di frontend.
     *
     * @return string|null
     */
    public function getImageUrlAttribute()
    {
        // $this->image berisi path relatif, misalnya: layanan_images/foto_layanan.jpg
        if ($this->image) {
            // Gunakan asset(Storage::url()) untuk mendapatkan URL publik penuh
            // PASTIKAN ANDA SUDAH MENJALANKAN: php artisan storage:link
            return asset(Storage::url($this->image)); 
        }
        return null;
    }
}
