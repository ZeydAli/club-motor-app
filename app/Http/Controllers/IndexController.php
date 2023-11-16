<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class IndexController extends Controller
{
    public function home()
    {
        return Inertia::render('Home');
    }

    public function profile()
    {
        return Inertia::render('Profile');
    }

    public function visiDanMisi()
    {
        return Inertia::render('VisiDanMisi');
    }

    public function produkKami()
    {
        return Inertia::render('ProdukKami');
    }

    public function kontakKami()
    {
        return Inertia::render('KontakKami');
    }

    public function aboutUs()
    {
        return Inertia::render('AboutUs');
    }
}
