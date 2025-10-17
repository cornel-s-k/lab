<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SdmLabData extends Model
{
    use HasFactory;

    protected $table = 'sdm_lab_data';

    protected $fillable = [
        'name',
        'value', // ✅ tambahkan ini
    ];
}
