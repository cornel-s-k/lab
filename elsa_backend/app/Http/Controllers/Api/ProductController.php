<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Product;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    /**
     * Mengambil semua data produk untuk katalog (list view).
     */
    public function index()
    {
        // Ambil data dengan kolom yang dibutuhkan saja (ringkas)
        $products = Product::select('id', 'title', 'short_description', 'image_path')->get();

        // Ubah path gambar menjadi URL publik
        $products->transform(function ($product) {
            $product->image = asset('storage/' . $product->image_path); // Sesuaikan dengan konfigurasi storage Laravel Anda
            unset($product->image_path); // Hapus path internal
            return $product;
        });

        return response()->json([
            'data' => $products
        ]);
    }
    
    /**
     * Mengambil detail produk berdasarkan ID.
     */
    public function show($id)
    {
        $product = Product::findOrFail($id);
        
        // Ubah path gambar menjadi URL publik
        $product->image = asset('storage/' . $product->image_path);
        unset($product->image_path);
        
        // Pastikan details di-decode jika disimpan sebagai JSON string
        $product->details = json_decode($product->details, true);

        return response()->json([
            'data' => $product
        ]);
    }
}