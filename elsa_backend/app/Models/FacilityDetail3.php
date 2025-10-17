<?php
namespace App\Models;
use Illuminate\Database\Eloquent\Model;

class FacilityDetail3 extends Model
{
    protected $fillable = [
        'short_description', 'main_image_path',
        'core_services', 'sub_lab_services'
    ];

    protected $casts = [
        'core_services' => 'array',
        'sub_lab_services' => 'array',
    ];
}