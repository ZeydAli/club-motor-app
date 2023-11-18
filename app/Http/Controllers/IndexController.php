<?php

namespace App\Http\Controllers;

use App\Models\Event;
use App\Models\Gallery;
use Illuminate\Http\Request;
use Inertia\Inertia;

class IndexController extends Controller
{
    public function beranda()
    {
        $galleries = Gallery::all();
        $events = Event::latest()->take(2)->with('image')->get();

        return Inertia::render('Beranda', compact('galleries', 'events'));
    }

    public function profil()
    {
        return Inertia::render('Profil');
    }

    public function galeri()
    {
        $galleries = Gallery::all();
        return Inertia::render('Gallery', compact('galleries'));
    }
}
