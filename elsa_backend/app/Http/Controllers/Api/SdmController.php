<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\LayananData;
use App\Models\SdmLabData;
use App\Models\SekolahData;
use Illuminate\Http\JsonResponse;

class SdmController extends Controller
{
    /**
     * Mengambil semua data statistik SDM (Layanan, Kualifikasi, Tugas Belajar)
     * untuk digunakan di halaman frontend.
     * * @return \Illuminate\Http\JsonResponse
     */
    public function index(): JsonResponse
    {
        // 1. Ambil Data Layanan (untuk Bar Chart)
        // Data ini dikelola melalui Form 1 di Filament
        $layanan = LayananData::select('name', 'value')->get();

        // 2. Ambil Data Kualifikasi SDM Lab (untuk Pie Chart)
        // Data ini dikelola melalui Form 2 di Filament
        $sdmLab = SdmLabData::select('name', 'value')->get();
        
        // 3. Ambil Data Tugas Belajar/Peningkatan Kapasitas (untuk Donut Chart)
        // Data ini dikelola melalui Form 3 di Filament
        $sekolah = SekolahData::select('name', 'value')->get();

        // Mengembalikan ketiga set data dalam satu objek respons JSON yang terstruktur
        return response()->json([
            'layananData' => $layanan,   // Contoh: [{"name": "Model Fisik...", "value": 16}, ...]
            'sdmLabData' => $sdmLab,     // Contoh: [{"name": "S3", "value": 4}, ...]
            'sekolahData' => $sekolah,   // Contoh: [{"name": "S3", "value": 2}, ...]
        ]);
    }
}
