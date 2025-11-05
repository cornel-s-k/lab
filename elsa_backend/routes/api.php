<?php

use App\Http\Controllers\Api\BeritaController;
use App\Http\Controllers\Api\LayananController;
use App\Http\Controllers\Api\HkpController;
use App\Http\Controllers\Api\FaqController;
use App\Http\Controllers\Api\HistoryController;
use App\Http\Controllers\Api\PartnerController;
use App\Http\Controllers\Api\SdmController; // <-- TAMBAHKAN INI
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
// use App\Http\Controllers\SocialLinkController;
// use App\Http\Controllers\PageLinkController;
use App\Http\Controllers\FacilityController;
use App\Http\Controllers\Api\ProductController;

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/berita', [BeritaController::class, 'index']);
Route::get('/berita/{id}', [BeritaController::class, 'show']); 
Route::get('/layanan', [LayananController::class, 'index']);
Route::get('/hkp', [HkpController::class, 'index']);
// Rute untuk detail HKP (untuk HKPLMFDP.js, dll.)
Route::get('/hkp/{code}', [HkpController::class, 'showByCode']); 
Route::get('/faq', [FaqController::class, 'index']);
Route::get('/history', [HistoryController::class, 'index']);
Route::get('/partners', [PartnerController::class, 'index']);

// ----------------------------------------------------
// RUTE BARU UNTUK DATA SDM (SEMUA DATA DALAM 1 ENDPOINT)
// ----------------------------------------------------
Route::get('/sdm', [SdmController::class, 'index']); // <-- TAMBAHKAN INI

// Route::get('/social-links', [SocialLinkController::class, 'index']);
// Route::post('/social-links', [SocialLinkController::class, 'store']);

// Route::get('/page-links', [PageLinkController::class, 'index']);
// Route::post('/page-links', [PageLinkController::class, 'store']);

use App\Models\PageLink;

// Rute untuk Timeline
Route::get('/page-links/timeline', function () {
    $pageLink = PageLink::where('name', 'Timeline')->first();
    if ($pageLink) {
        return response()->json($pageLink);
    }
    return response()->json(['message' => 'Timeline link not found'], 404);
});

// Rute untuk Capaian ELSA
Route::get('/page-links/capaian-elsa', function () {
    $pageLink = PageLink::where('name', 'Capaian ELSA')->first();
    if ($pageLink) {
        return response()->json($pageLink);
    }
    return response()->json(['message' => 'Capaian ELSA link not found'], 404);
});

// Rute untuk Video
Route::get('/page-links/video', function () {
    $pageLink = PageLink::where('name', 'Video')->first();
    if ($pageLink && $pageLink->video_path) {
        $videoUrl = url('storage/' . $pageLink->video_path);
        return response()->json([
            'name' => $pageLink->name,
            'video_url' => $videoUrl,
        ]);
    }
    return response()->json(['message' => 'Video not found'], 404);
});


Route::get('facilities', [FacilityController::class, 'index']);
    Route::get('facilities/{slug}', [FacilityController::class, 'show']);

Route::get('products', [ProductController::class, 'index']);
Route::get('products/{slug}', [ProductController::class, 'show']);