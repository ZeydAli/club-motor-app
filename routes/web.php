<?php

use App\Http\Controllers\AdminController;
use App\Http\Controllers\ArticleController;
use App\Http\Controllers\EventController;
use App\Http\Controllers\GalleryController;
use App\Http\Controllers\IndexController;
use App\Http\Controllers\LoginController;
use App\Http\Controllers\ProductController;
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

Route::get('/', [IndexController::class, 'beranda'])->middleware(['shareAuthData']);
Route::get('/profil', [IndexController::class, 'profil'])->middleware(['shareAuthData']);
Route::get('/galeri', [IndexController::class, 'galeri'])->middleware(['shareAuthData']);

Route::get('/login', [LoginController::class, 'index'])->middleware('guest');
Route::post('/logout', [LoginController::class, 'logout'])->middleware('auth');
Route::post('/login', [LoginController::class, 'authenticate'])->middleware('guest');

Route::get('/admin', [AdminController::class, 'index'])->middleware(['auth', 'isAdmin']);

Route::get('/admin/galleries', [GalleryController::class, 'index'])->middleware(['auth', 'isAdmin']);
Route::post('/admin/galleries', [GalleryController::class, 'store'])->middleware(['auth', 'isAdmin']);
Route::delete('/admin/galleries/{id}', [GalleryController::class, 'destroy'])->middleware(['auth', 'isAdmin']);

Route::get('/admin/events', [EventController::class, 'index'])->middleware(['auth', 'isAdmin']);
Route::get('/admin/events/create', [EventController::class, 'create'])->middleware(['auth', 'isAdmin']);
Route::get('/admin/events/{id}/edit', [EventController::class, 'edit'])->middleware(['auth', 'isAdmin']);
Route::post('/admin/events', [EventController::class, 'store'])->middleware(['auth', 'isAdmin']);
Route::put('/admin/events/{id}', [EventController::class, 'update'])->middleware(['auth', 'isAdmin']);
Route::delete('/admin/events/{id}', [EventController::class, 'destroy'])->middleware(['auth', 'isAdmin']);
Route::post('/admin/events/{id}/image', [EventController::class, 'createImage'])->middleware(['auth', 'isAdmin']);


