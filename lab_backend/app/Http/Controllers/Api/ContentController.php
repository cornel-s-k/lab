<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Facility;
use App\Models\Setting;
use App\Models\SDM;

class ContentController extends Controller
{
    /**
     * Ambil semua fasilitas
     */
    public function getFacilities()
    {
        return response()->json(Facility::all());
    }

    /**
     * Ambil pengaturan website (judul, tagline, link, dll)
     */
    public function getSettings()
    {
        $settings = Setting::first(); // biasanya hanya 1 record
        return response()->json($settings);
    }

    /**
     * Ambil data SDM (misal: kualifikasi, tugas belajar, layanan)
     */
    public function getSdmData()
    {
        return response()->json(SDM::all());
    }
}

