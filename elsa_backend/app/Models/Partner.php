<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Storage;

class Partner extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'logo_url',
        'order_index',
    ];

     public function scopeOrdered($query)
    {
        return $query->orderBy('order_index')->orderBy('name');
    }

    /**
     * Get the full URL for the partner's logo.
     *
     * @return string
     */
    public function getLogoUrlAttribute($value)
    {
        // $value adalah nama file/path yang tersimpan di DB
        if ($value && !str_starts_with($value, 'http')) {
             // Menggunakan Storage::url() untuk mendapatkan URL publik
             // Ini akan menambahkan prefix /storage/
            return Storage::url($value);
        }
        return $value;
    }

    /**
     * The accessors to append to the model's array form.
     *
     * @var array
     */
    protected $appends = ['logo_url_full']; // Tambahkan accessor baru

    /**
     * Accessor untuk mendapatkan URL logo lengkap yang siap pakai.
     * Akan digunakan di API.
     *
     * @return string
     */
    public function getLogoUrlFullAttribute()
    {
        // Memastikan logo_url yang dikirim adalah full URL
        if ($this->logo_url) {
            return asset($this->logo_url);
        }
        return null;
    }
}