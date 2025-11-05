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
        // Tambahkan slug biar frontend bisa akses link detail
        $products = Product::select('id', 'title', 'short_description', 'image_path', 'slug')->get();

        // Ubah path gambar jadi URL publik
        $products->transform(function ($product) {
            $product->image = asset('storage/' . $product->image_path);
            unset($product->image_path);
            return $product;
        });

        return response()->json([
            'data' => $products
        ]);
    }

    /**
     * Mengambil detail produk berdasarkan SLUG.
     */
    public function show($slug) // <-- Ubah dari Product $product menjadi $slug
    {
        // Cari produk berdasarkan slug, dan throw 404 jika tidak ditemukan
        $product = Product::where('slug', $slug)->firstOrFail(); 

        // Pastikan image_path tidak kosong
        if ($product->image_path) {
            $product->image = asset('storage/' . $product->image_path);
        } else {
            $product->image = null;
        }

        unset($product->image_path);

        return response()->json([
            'data' => $product
        ]);
    }
}