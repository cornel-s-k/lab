<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Facility extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'title',          // <--- PENTING: Tambahkan ini
        'slug',           // <--- Tambahkan ini
        'image',          // <--- Tambahkan ini
        'status',         // <--- Tambahkan ini
        'sort_order',     // <--- Tambahkan ini
        'detail_type',    // <--- Tambahkan ini
        'detail_id',      // <--- Tambahkan ini
    ];
}
