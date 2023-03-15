<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CartController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::post('/cart/add', [CartController::class, 'add'])->name('add')->middleware('auth');
Route::get('/cart', [CartController::class, 'show'])->name('cart')->middleware('auth');
Route::post('/cart/remove', [CartController::class, 'remove'])->name('remove')->middleware('auth');
Route::post('/cart/update', [CartController::class, 'update'])->name('update')->middleware('auth');