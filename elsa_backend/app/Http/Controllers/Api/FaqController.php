<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Faq; // Import Model Faq
use Illuminate\Http\Request;

class FaqController extends Controller
{
    /**
     * Menampilkan daftar semua FAQ.
     */
    public function index()
    {
        try {
            // Ambil semua data dari tabel 'faqs'
            $faqs = Faq::all();

            // Kembalikan respons JSON
            return response()->json([
                'success' => true,
                'message' => 'Daftar FAQ berhasil diambil.',
                'data' => $faqs
            ], 200);

        } catch (\Exception $e) {
            // Tangani error jika terjadi masalah pada database atau server
            return response()->json([
                'success' => false,
                'message' => 'Gagal mengambil data FAQ.',
                'error' => $e->getMessage()
            ], 500);
        }
    }
}