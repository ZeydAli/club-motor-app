<?php

namespace App\Http\Controllers;

use App\Models\Gallery;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\URL;
use Inertia\Inertia;

class GalleryController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $galleries = Gallery::all();
        return Inertia::render('Admin/Gallery', compact('galleries'));
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        // dd($request);
        $validatedData = $request->validate([
            'image' => 'required|image|file|max:5120|mimes:jpeg,png,jpg,gif,webp',
        ]);

        $gallery = new Gallery();
        $imagePath = $request->file('image')->store('images/galleries', 'public');
        $gallery->image = $imagePath;

        $gallery->save();

        $directoryUrl = URL::to('/admin/galleries');

        return Inertia::location($directoryUrl);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $image = Gallery::findOrFail($id);

        Storage::disk('public')->delete($image->image);
        $image->delete();
    }
}
