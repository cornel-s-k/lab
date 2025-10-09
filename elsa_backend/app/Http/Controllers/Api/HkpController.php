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
        return response()->json($hkps, 200);
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