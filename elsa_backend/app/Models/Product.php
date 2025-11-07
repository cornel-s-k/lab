<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'title',
        'slug',
        'short_description',
        'full_description',
        'image_path',
        'read_more_link',
    ];
    
    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
    ];
    /**
     * Get the route key for the model.
     * * @return string
     */
    public function getRouteKeyName() 
    {
        return 'slug';
    }
}