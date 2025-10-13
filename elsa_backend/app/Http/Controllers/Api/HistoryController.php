<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\History;
use Illuminate\Http\Request;

class HistoryController extends Controller
{
    /**
     * Ambil data timeline sejarah, diurutkan berdasarkan urutan yang sudah ditentukan.
     */
    public function index()
    {
        try {
            // Menggunakan scopeOrdered dari Model History untuk mengurutkan
            $histories = History::ordered()->get();

            return response()->json([
                'success' => true,
                'message' => 'Daftar sejarah (timeline) berhasil diambil.',
                'data' => $histories
            ], 200);

        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Gagal mengambil data sejarah.',
                'error' => $e->getMessage()
            ], 500);
        }
    }
}
