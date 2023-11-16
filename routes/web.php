<?php

use App\Http\Controllers\IndexController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', [IndexController::class, 'home']);
Route::get('/profile', [IndexController::class, 'profile']);
Route::get('/visidanmisi', [IndexController::class, 'visiDanMisi']);
Route::get('/produkkami', [IndexController::class, 'produkKami']);
Route::get('/kontakkami', [IndexController::class, 'kontakKami']);
Route::get('/aboutus', [IndexController::class, 'aboutUs']);
