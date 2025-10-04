<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\ContentController; // <<< PASTIKAN INI ADA

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

// Route default Laravel (Opsional, bisa dihapus jika tidak digunakan)
Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});


// =========================================================================
// RUTE API UNTUK FRONTEND (DASHBOARD LAB)
// =========================================================================

// Mengambil list Fasilitas
Route::get('/v1/facilities', [ContentController::class, 'getFacilities']); 

// Mengambil konten statis (Sejarah, Tagline, About Us, Hak & Kewajiban, Kerjasama)
Route::get('/v1/settings', [ContentController::class, 'getSettings']);

// Mengambil data SDM untuk grafik (Layanan, Kualifikasi, Tubel)
Route::get('/v1/sdm-data', [ContentController::class, 'getSdmData']);

