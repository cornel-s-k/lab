<?php

namespace App\Http\Controllers;

use App\Models\SocialLink;
use Illuminate\Http\Request;

class SocialLinkController extends Controller
{
    public function index()
    {
        return response()->json(SocialLink::all());
    }

    public function store(Request $request)
    {
        $data = $request->validate([
            'platform' => 'required|string',
            'username' => 'nullable|string',
            'link' => 'nullable|string',
            'phone_number' => 'nullable|string',
        ]);

        $link = SocialLink::updateOrCreate(
            ['platform' => $data['platform']],
            $data
        );

        return response()->json($link);
    }
}
