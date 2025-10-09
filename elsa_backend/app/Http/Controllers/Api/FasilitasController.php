<?php
namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Fasilitas; // Pastikan Anda sudah membuat Model Fasilitas

class FasilitasController extends Controller
{
    /**
     * Mengambil daftar semua fasilitas (untuk halaman daftar).
     * Dapat disortir berdasarkan ID atau kolom lain.
     */
    public function index()
    {
        // Mengambil semua data Fasilitas, diurutkan dari yang terbaru dibuat (atau berdasarkan ID)
        // Jika Anda hanya ingin judul dan deskripsi singkat, Anda bisa menggunakan select():
        // return response()->json(Fasilitas::latest()->select('id', 'judul', 'deskripsi_singkat', 'gambar')->get());
        
        return response()->json(Fasilitas::latest()->get());
    }

    /**
     * Mengambil detail satu fasilitas berdasarkan ID.
     * Digunakan untuk halaman FasilitasDetail1, FasilitasDetail2, dll.
     */
    public function show($id)
    {
        // Mencari Fasilitas berdasarkan ID, atau gagal (404) jika tidak ditemukan
        $fasilitas = Fasilitas::findOrFail($id);
        
        return response()->json($fasilitas);
    }
}
