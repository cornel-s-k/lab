<?php
use App\Http\Controllers\Api\BeritaController;
use App\Http\Controllers\Api\FasilitasController;
use App\Http\Controllers\Api\LayananController;
use App\Http\Controllers\Api\HkpController;
use App\Http\Controllers\Api\FaqController;
use App\Http\Controllers\Api\HistoryController;
use App\Http\Controllers\Api\PartnerController;

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/berita', [BeritaController::class, 'index']);
Route::get('/berita/{id}', [BeritaController::class, 'show']);
Route::get('/fasilitas', [FasilitasController::class, 'index']);
// 2. Rute untuk Detail Fasilitas (FasilitasDetail.js)
Route::get('/fasilitas/{id}', [FasilitasController::class, 'show']); 
Route::get('/layanan', [LayananController::class, 'index']);
Route::get('/hkp', [HkpController::class, 'index']);
// Rute untuk detail HKP (untuk HKPLMFDP.js, dll.)
Route::get('/hkp/{code}', [HkpController::class, 'showByCode']); 
Route::get('/faq', [FaqController::class, 'index']);
Route::get('/history', [HistoryController::class, 'index']);
Route::get('/partners', [PartnerController::class, 'index']);


