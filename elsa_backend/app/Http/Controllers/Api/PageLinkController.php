<?php

namespace App\Http\Controllers;

use App\Models\PageLink;
use Illuminate\Http\Request;

class PageLinkController extends Controller
{
    public function index()
    {
        return response()->json(PageLink::all());
    }

    public function store(Request $request)
    {
        $data = $request->validate([
            'name' => 'required|string',
            'link' => 'nullable|string',
            'video_path' => 'nullable|string',
        ]);

        $page = PageLink::updateOrCreate(
            ['name' => $data['name']],
            $data
        );

        return response()->json($page);
    }
}
