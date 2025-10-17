<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\LayananData;
use App\Models\SdmLabData;
use App\Models\SekolahData;

class SdmDataSeeder extends Seeder
{
    public function run(): void
    {
        // Layanan Data (Bar Chart)
        LayananData::firstOrCreate(['name' => 'Model Fisik Dinamika Pantai'], ['value' => 16]);
        LayananData::firstOrCreate(['name' => 'Simulasi Hidro-oseanografi'], ['value' => 11]);
        LayananData::firstOrCreate(['name' => 'Mekanika Tanah & Akuisisi Data Lapangan'], ['value' => 12]);
        
        // SDM Lab Data (Kualifikasi Pendidikan)
        SdmLabData::firstOrCreate(['name' => 'S3'], ['value' => 4]);
        SdmLabData::firstOrCreate(['name' => 'S2'], ['value' => 11]);
        SdmLabData::firstOrCreate(['name' => 'S1'], ['value' => 12]);
        SdmLabData::firstOrCreate(['name' => 'D3'], ['value' => 7]);
        SdmLabData::firstOrCreate(['name' => 'SLTA'], ['value' => 6]);

        // Sekolah Data (Tugas Belajar)
        SekolahData::firstOrCreate(['name' => 'S3'], ['value' => 2]);
        SekolahData::firstOrCreate(['name' => 'S2'], ['value' => 4]);
        SekolahData::firstOrCreate(['name' => 'S1'], ['value' => 3]);
    }
}