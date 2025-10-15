<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Hkp;
use Illuminate\Http\JsonResponse;

class HkpController extends Controller
{
    /**
     * Mengambil daftar ringkasan HKP untuk halaman utama (HKPSection).
     *
     * @return JsonResponse
     */
    public function index(): JsonResponse
     {
        // Ambil data ringkasan untuk card di homepage
        $hkps = Hkp::latest()->get(['id', 'code', 'title', 'image']);
        
        // Mapping untuk menyertakan image_url
        $formattedHkps = $hkps->map(function ($hkp) {
            return [
                'code' => $hkp->code,
                'title' => $hkp->title,
                // Gunakan accessor image_url yang sudah dibuat di Model
                'image' => $hkp->image_url, 
                // Tambahkan link agar frontend tidak perlu membuat path sendiri
                'link' => '/hkp/' . $hkp->code,
            ];
        });
        
        return response()->json($formattedHkps, 200); // KEMBALIKAN DATA YANG DIMAPPING
    }

    /**
     * Mengambil detail lengkap satu HKP berdasarkan kode unik (code).
     * Digunakan untuk mengisi halaman detail HKPL-MFDP, dll.
     *
     * @param string $code
     * @return JsonResponse
     */
    public function showByCode(string $code): JsonResponse
    {
        // Cari HKP berdasarkan 'code' (e.g., HKPL-MFDP)
        $hkp = Hkp::where('code', $code)->firstOrFail();
        
        return response()->json($hkp, 200);
    }
}