<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Berita;
use Illuminate\Support\Str; // Import Str Class

class BeritaController extends Controller
{
    // === API LIST BERITA ===
    public function index()
    {
        // Ambil kolom yang diperlukan: id, judul, isi, gambar
        // Accessor 'image_url' dan 'published_at' akan otomatis tersedia
        $beritas = Berita::latest()->get(['id', 'judul', 'isi', 'gambar', 'created_at']);

        $formattedBeritas = $beritas->map(function ($berita) {
            return [
                'id' => $berita->id,
                // Menggunakan 'judul' dari DB
                'title' => $berita->judul,
                // Membuat ringkasan dari 'isi', menghapus tag HTML terlebih dahulu
                'excerpt' => Str::limit(strip_tags($berita->isi), 150, '...'),
                // Menggunakan Accessor dari Model
                'image' => $berita->image_url,
                'published_at' => $berita->published_at, // Menggunakan Accessor
            ];
        });

        return response()->json($formattedBeritas);
    }

    // === API DETAIL BERITA (Baru/Perlu Ditambahkan) ===
    public function show($id)
    {
        // Cari berita berdasarkan ID, gagal jika tidak ditemukan (404)
        $berita = Berita::findOrFail($id, ['id', 'judul', 'isi', 'gambar', 'created_at']);

        // Format data detail
        $formattedBerita = [
            'id' => $berita->id,
            'title' => $berita->judul,
            'content' => $berita->isi, // Konten lengkap (HTML)
            'image' => $berita->image_url, // Menggunakan Accessor
            'published_at' => $berita->published_at, // Menggunakan Accessor
            // Anda bisa tambahkan 'author' jika ada kolomnya
        ];

        return response()->json($formattedBerita);
    }
}