<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class IndexController extends Controller
{
    public function beranda()
    {
        return Inertia::render('Beranda');
    }

    public function profil()
    {
        return Inertia::render('Profil');
    }

    public function galeri()
    {
        return Inertia::render('Gallery');
    }
}
