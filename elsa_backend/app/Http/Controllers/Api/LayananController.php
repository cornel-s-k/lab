<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Layanan; // Import Model Layanan
use Illuminate\Http\Request;

class LayananController extends Controller
{
    /**
     * Ambil daftar semua layanan.
     */
    public function index()
    {
        try {
            // Ambil semua data Layanan
            $layanans = Layanan::all();

            // Mapping data untuk memastikan frontend menerima format yang diharapkan
            $formattedLayanans = $layanans->map(function ($layanan) {
                return [
                    'title' => $layanan->title,
                    'description' => $layanan->description,
                    'link' => $layanan->link,
                    // Menggunakan accessor image_url yang sudah kita buat di Model
                    'image' => $layanan->image_url, 
                ];
            });

            return response()->json([
                'success' => true,
                'message' => 'Daftar layanan berhasil diambil.',
                'data' => $formattedLayanans
            ], 200);

        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Gagal mengambil data layanan.',
                'error' => $e->getMessage()
            ], 500);
        }
    }
}
