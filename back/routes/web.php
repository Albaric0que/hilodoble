<?php

use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ItemController;
use App\Http\Controllers\HomeController;


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

Route::get('/', function () {
    return view('welcome');
}); 
Auth::routes();

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');

//R del CRUD
Route::get('/',[ItemController::class,'index'])->name('home');
Route::get('/home',[ItemController::class,'index']);

//U del CRUD
Route::get('/edit/{id}', [ItemController::class, 'edit'])->name('editItem');
Route::patch('/item/{id}', [ItemController::class, 'update'])->name('updateItem')/* ->middleware('isadmin', 'auth') */;

Route::resource('items', 'App\Http\Controllers\ItemController');

Route::resource('users', 'App\Http\Controllers\UserController');

Auth::routes();

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home')->middleware('auth');

Route::get('/create', [ItemController::class, 'create'])->name('create')->middleware('auth');
Route::post('/', [ItemController::class, 'store'])->name('store')->middleware('auth');



Route::resource('items', 'App\Http\Controllers\ItemController');

Route::resource('users', 'App\Http\Controllers\UserController');

Auth::routes();

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home')->middleware('auth');

Route::get('/create', [ItemController::class, 'create'])->name('create')->middleware('auth');
Route::post('/', [ItemController::class, 'store'])->name('store')->middleware('auth');


