<?php
namespace App\Models;
use Illuminate\Database\Eloquent\Model;

class FacilityDetail2 extends Model
{
    protected $fillable = [
        'title', 'lead_text', 'main_image',
        'software_list', 'service_items'
    ];

    protected $casts = [
        'software_list' => 'array', 
        'service_items' => 'array'
    ];
}