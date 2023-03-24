<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\UserController;
use App\Http\Controllers\AuthController;
use App\Http\Middleware\CheckUser;
use App\Http\Controllers\Api\ItemController;
use App\Http\Controllers\Api\CartController;

//Endpoints Item
Route::get('/', [App\Http\Controllers\Api\ItemController::class, 'index'])->name('itemsApi');
Route::get('showItem/{id}', [ItemController::class, 'show'])->name('showItemApi');

//Endpoints User
Route::group([
    'middleware' => 'api',
    'prefix' => 'auth'
], function ($router) {
    Route::post('/login', [AuthController::class, 'login'])->name('loginUserApi');
    Route::post('/register', [AuthController::class, 'register'])->name('registerUserApi');
    Route::post('/logout', [AuthController::class, 'logout'])->name('logoutUserApi');
    Route::post('/refresh', [AuthController::class, 'refresh'])->name('refreshUserApi');
    Route::get('/user-profile', [AuthController::class, 'userProfile'])->name('profileUserApi'); 
    Route::delete('/deleteUser/{id}',[UserController::class,'destroy'])->middleware('CheckUser')->name('destroyUserApi'); 
    Route::put('/updateUser/{id}', [UserController::class,'update'])->middleware('CheckUser')->name('updateUserApi');  
});

//Endpoints Cart
Route::get('/cart', [App\Http\Controllers\Api\CartController::class, 'show'])->name('cart')->middleware('auth');
Route::post('/cart/add', [App\Http\Controllers\Api\CartController::class, 'add'])->name('add')->middleware('auth');
Route::post('/cart/remove', [App\Http\Controllers\Api\CartController::class, 'remove'])->name('remove')->middleware('auth');
Route::post('/cart/update', [App\Http\Controllers\Api\CartController::class, 'update'])->name('update')->middleware('auth');