<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SekolahData extends Model
{
    use HasFactory;

    protected $table = 'sekolah_data';

    protected $fillable = [
        'name',
        'value', // ✅ tambahkan field ini
    ];
}
