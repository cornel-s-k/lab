<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class History extends Model
{
    use HasFactory;
    
    // Kolom-kolom yang harus diizinkan untuk Mass Assignment
    protected $fillable = [
        'year',
        'description',
        'is_highlight',
        'order_index',
    ];
    
    // Cast 'is_highlight' ke boolean
    protected $casts = [
        'is_highlight' => 'boolean',
    ];

    /**
     * Scope untuk mengurutkan data berdasarkan order_index, lalu year.
     */
    public function scopeOrdered($query)
    {
        return $query->orderBy('order_index', 'asc')->orderBy('year', 'asc');
    }
}
