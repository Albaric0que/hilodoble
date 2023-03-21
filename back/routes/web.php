<?php

use App\Models\Item;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\ItemController;
use App\Http\Controllers\CartController;
use App\Http\Controllers\UserController;


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


Route::resource('items', 'App\Http\Controllers\ItemController');
Route::resource('users', 'App\Http\Controllers\UserController');
Route::resource('carts', 'App\Http\Controllers\CartController');

/* Route::get('/', function () {
    return view('welcome');
}); */
Auth::routes();

//C del CRUD Item
Route::get('/createItem', [ItemController::class, 'create'])->name('create')->middleware('isadmin', 'auth');
Route::post('/', [ItemController::class, 'store'])->name('store')->middleware('isadmin', 'auth');

//R del CRUD Item
Route::get('/',[ItemController::class,'index'])->name('home');
Route::get('/home',[ItemController::class,'index']);

//U del CRUD Item
Route::get('/edit/{id}', [ItemController::class, 'edit'])->name('editItem')->middleware('isadmin', 'auth');
Route::patch('/item/{id}', [ItemController::class, 'update'])->name('updateItem')->middleware('isadmin', 'auth');

//D del CRUD Item
Route::delete('/items/{id}', [ItemController::class, 'destroy'])->name('deleteItem')->middleware('isadmin', 'auth');
Route::get('/items/{id}', [ItemController::class, 'show'])->name('showItem')->middleware('isadmin', 'auth');

//Show Item
Route::get('/showItem/{id}', [ItemController::class, 'show'])->name('showItem')->middleware('isadmin', 'auth');
Route::get('/home', [HomeController::class, 'index'])->name('home')->middleware('auth');
//S Show
Route::get('/home', [HomeController::class, 'index'])->name('home');
Route::get('/show/{id}',[ItemController::class,'show'])->name('showItem');

//Routes Cart
Route::post('/cart/add', [CartController::class, 'add'])->name('add')->middleware('auth');
Route::get('/cart', [CartController::class, 'show'])->name('cart')->middleware('auth');
Route::post('/cart/remove', [CartController::class, 'remove'])->name('remove')->middleware('auth');
Route::post('/cart/update', [CartController::class, 'update'])->name('update')->middleware('auth');

//CRUD del User

//C del user
Route::post('/user', [UserController::class, 'storeUser'])->name('storeUser')->middleware('isadmin', 'auth');
Route::get('/createUser', [UserController::class, 'create'])->name('create')->middleware('isadmin', 'auth');

//R del USER
Route::get('/usersList',[UserController::class,'usersList'])->name('usersList')->middleware('isadmin', 'auth');

//U del user
Route::get('/editUser/{id}', [UserController::class, 'editUser'])->name('editUser')->middleware('isadmin', 'auth');
Route::patch('/user/{id}', [UserController::class, 'updateUser'])->name('updateUser')->middleware('isadmin', 'auth');

//D del user
Route::delete('/deleteUser/{id}',[UserController::class,'destroy'])->name('deleteUser')->middleware('isadmin', 'auth');


/* //Show
Route::get('/showUser', [UserController::class, 'show'])->name('showUser');
Route::get('/showUser/{id}', [UserController::class, 'show'])->name('showUser')->middleware('isadmin', 'auth');
 */ 