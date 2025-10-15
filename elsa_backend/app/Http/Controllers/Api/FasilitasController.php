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
        // Ambil data dan tampilkan URL gambar lengkap
        $fasilitas = Fasilitas::latest()->get(['id', 'judul', 'deskripsi_singkat', 'gambar']);
        
        // Mapping untuk menyertakan 'gambar_url' yang dibuat di Model
        $formattedFasilitas = $fasilitas->map(function ($fasil) {
            return [
                'id' => $fasil->id,
                'title' => $fasil->judul, // Di frontend namanya 'title'
                'deskripsi_singkat' => $fasil->deskripsi_singkat,
                'image' => $fasil->gambar_url, // Di frontend namanya 'image'
                'link' => '/fasilitas/' . $fasil->id, // Tautkan ke halaman detail
            ];
        });
        
        return response()->json($formattedFasilitas);
    }

    public function show($id)
    {
        // Model sudah memiliki accessor 'gambar_url' karena sudah di $appends
        $fasilitas = Fasilitas::findOrFail($id);
        
        // Data yang dikembalikan akan otomatis menyertakan 'gambar_url'
        return response()->json($fasilitas); 
    }
}
