<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\ItemController;
use App\Http\Controllers\Api\CartController;

//R de ItemApi
Route::get('/', [App\Http\Controllers\Api\ItemController::class, 'index'])->name('itemsApi');

//S de ItemApi

Route::get('/cart', [App\Http\Controllers\Api\CartController::class, 'show'])->name('cart')->middleware('auth');
Route::post('/cart/add', [App\Http\Controllers\Api\CartController::class, 'add'])->name('add')->middleware('auth');
Route::post('/cart/remove', [App\Http\Controllers\Api\CartController::class, 'remove'])->name('remove')->middleware('auth');
Route::post('/cart/update', [App\Http\Controllers\Api\CartController::class, 'update'])->name('update')->middleware('auth');