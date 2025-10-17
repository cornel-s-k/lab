<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class LayananData extends Model
{
    use HasFactory;

    protected $table = 'layanan_data';

    protected $fillable = [
        'name',
        'value', // ✅ tambahkan ini
    ];
}
