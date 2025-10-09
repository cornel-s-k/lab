<?php
use App\Http\Controllers\Api\BeritaController;
use App\Http\Controllers\Api\FasilitasController;
use App\Http\Controllers\Api\LayananController;
use App\Http\Controllers\Api\HkpController;

Route::get('/berita', [BeritaController::class, 'index']);
Route::get('/fasilitas', [FasilitasController::class, 'index']);
Route::get('/layanan', [LayananController::class, 'index']);
Route::get('/hkp', [HkpController::class, 'index']);
