<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Storage;

class Hkp extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'code',
        'title',
        'hak_content',
        'kewajiban_content',
        'image',
    ];

     protected $appends = ['image_url'];

    public function getImageUrlAttribute()
    {
        if ($this->image) {
            // Mengembalikan URL publik dari gambar yang disimpan di direktori 'hkp-images'
            return asset(Storage::url($this->image)); 
        }
        return null;
    }
}