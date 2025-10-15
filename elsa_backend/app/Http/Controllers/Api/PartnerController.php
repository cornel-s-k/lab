<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Partner;
use Illuminate\Http\Request;

class PartnerController extends Controller
{
    /**
     * Ambil data mitra kerjasama.
     */
    public function index()
    {
        try {
            // Menggunakan scopeOrdered dari Model Partner untuk mengurutkan
            $partners = Partner::ordered()
                        ->get()
                        ->map(function ($partner) {
                            // Ambil attribute logo_url_full yang sudah dibuat di Model
                            return [
                                'name' => $partner->name,
                                'logo' => $partner->logo_url_full, // Menggunakan accessor baru
                                'order_index' => $partner->order_index,
                                // Anda dapat menambahkan kolom lain yang dibutuhkan
                            ];
                        });

            return response()->json([
                'success' => true,
                'message' => 'Daftar mitra kerjasama berhasil diambil.',
                'data' => $partners
            ], 200);

        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Gagal mengambil data mitra kerjasama.',
                'error' => $e->getMessage()
            ], 500);
        }
    }
}
