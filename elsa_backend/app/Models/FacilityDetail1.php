<?php
namespace App\Models;
use Illuminate\Database\Eloquent\Model;

class FacilityDetail1 extends Model
{
    protected $fillable = [
        'pool_dimen', 'pool_wavemaker_image', 'pool_specs',
        'glass_dimen', 'glass_wavemaker_image', 'glass_specs',
        'concrete_dimen', 'concrete_wavemaker_image', 'concrete_specs',
        'tsunami_dimen', 'tsunami_description', 'tsunami_image', 'tsunami_specs',
        'wave_types_regular', 'wave_types_irregular'
    ];

    protected $casts = [
        'pool_specs' => 'array', 'glass_specs' => 'array', 
        'concrete_specs' => 'array', 'tsunami_specs' => 'array',
        'wave_types_regular' => 'array', 'wave_types_irregular' => 'array'
    ];
}