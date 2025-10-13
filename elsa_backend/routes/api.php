<?php
use App\Http\Controllers\Api\BeritaController;
use App\Http\Controllers\Api\FasilitasController;
use App\Http\Controllers\Api\LayananController;
use App\Http\Controllers\Api\HkpController;
use App\Http\Controllers\Api\FaqController;
use App\Http\Controllers\Api\HistoryController;
use App\Http\Controllers\Api\PartnerController;

Route::get('/berita', [BeritaController::class, 'index']);
Route::get('/fasilitas', [FasilitasController::class, 'index']);
Route::get('/layanan', [LayananController::class, 'index']);
Route::get('/hkp', [HkpController::class, 'index']);
Route::get('/faq', [FaqController::class, 'index']);
Route::get('/history', [FaqController::class, 'index']);
Route::get('/partner', [FaqController::class, 'index']);


