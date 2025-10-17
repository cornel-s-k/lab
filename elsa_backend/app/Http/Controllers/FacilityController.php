<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Response;
use App\Models\Facility; 
use App\Models\FacilityDetail1;
use App\Models\FacilityDetail2;
use App\Models\FacilityDetail3;

class FacilityController extends Controller
{
    /**
     * Mengambil daftar fasilitas untuk ditampilkan di halaman depan (kartu).
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function index()
    {
        // Ambil data fasilitas utama, diurutkan berdasarkan sort_order
        // Gunakan select untuk memastikan data yang diambil efisien
        try {
            $facilities = Facility::orderBy('sort_order')->get(['id', 'title', 'image', 'status', 'slug']);
            return response()->json($facilities);
        } catch (\Exception $e) {
            // Log the error for debugging purposes
            \Log::error('FacilityController index error: ' . $e->getMessage());
            return response()->json(['message' => 'Failed to fetch facilities data.', 'error' => $e->getMessage()], 500);
        }
    }

    /**
     * Mengambil data detail fasilitas berdasarkan slug dan detail_type.
     *
     * @param string $slug
     * @return \Illuminate\Http\JsonResponse
     */
    public function show($slug)
    {
        // 1. Cari fasilitas utama berdasarkan slug
        $facility = Facility::where('slug', $slug)->first();

        if (!$facility) {
            return response()->json(['message' => 'Facility not found.'], 404);
        }

        // 2. Tentukan Model Detail yang terkait (Polymorphic Logic)
        $detailModel = match ($facility->detail_type) {
            'FacilityDetail1' => FacilityDetail1::class,
            'FacilityDetail2' => FacilityDetail2::class,
            'FacilityDetail3' => FacilityDetail3::class,
            // Tambahkan mapping untuk FacilityDetail4 jika sudah dibuat
            // 'FacilityDetail4' => \App\Models\FacilityDetail4::class, 
            default => null,
        };

        // 3. Ambil data detail jika model dan ID tersedia
        $detailData = null;
        if ($detailModel && $facility->detail_id) {
            try {
                $detailData = $detailModel::find($facility->detail_id);
            } catch (\Exception $e) {
                \Log::error("Failed to fetch detail data for {$facility->title}: " . $e->getMessage());
                // Tetap kembalikan fasilitas utama, tapi detailnya null
            }
        }
        
        // 4. Gabungkan data fasilitas dasar dan detail
        if ($detailData) {
            return response()->json([
                'facility' => $facility,
                'detail' => $detailData,
            ]);
        }
        
        // Jika data detail tidak ditemukan
        return response()->json(['message' => 'Facility found, but specific detail data is missing or not linked correctly.'], 404);
    }
}