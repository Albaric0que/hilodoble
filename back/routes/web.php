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
/* Route::get('/', function () {
    return view('/login');
});
 */
Route::resource('items', 'App\Http\Controllers\ItemController');
Route::resource('users', 'App\Http\Controllers\UserController');
Route::resource('carts', 'App\Http\Controllers\CartController');
/* Route::resource('index', 'App\Http\Controllers\HomeController'); */

Auth::routes();

//R del CRUD Item
Route::get('/',[ItemController::class,'index'])->name('home');
Route::get('/home',[ItemController::class,'index']);

//C del CRUD Item
Route::post('/', [ItemController::class, 'store'])->name('store');
Route::get('/createItem', [ItemController::class, 'create'])->name('create');

//U del CRUD Item
Route::get('/edit/{id}', [ItemController::class, 'edit'])->name('editItem');
Route::patch('/item/{id}', [ItemController::class, 'update'])->name('updateItem');

//D del CRUD Item
Route::delete('/items/{id}', [ItemController::class, 'destroy'])->name('deleteItem');


//Show Item
Route::get('/showItem/{id}', [ItemController::class, 'show'])->name('showItem');


//CRUD del User

//C del user
//R del USER
Route::get('/usersList',[UserController::class,'usersList'])->name('usersList');

/* Route::post('/user', [UserController::class, 'storeUser'])->name('storeUser');
Route::get('/createUser', [UserController::class, 'create'])->name('create'); */

//U del user
Route::get('/editUser/{id}', [UserController::class, 'editUser'])->name('editUser');
Route::patch('/user/{id}', [UserController::class, 'updateUser'])->name('updateUser');

//D del user
Route::delete('/deleteUser/{id}',[UserController::class,'destroy'])->name('deleteUser');


/* //Show
Route::get('/showUser', [UserController::class, 'show'])->name('showUser');
Route::get('/showUser/{id}', [UserController::class, 'show'])->name('showUser')->middleware('isadmin', 'auth');
 */ 

 //Routes Cart
Route::post('/cart/add', [CartController::class, 'add'])->name('add')->middleware('auth');
Route::get('/cart', [CartController::class, 'show'])->name('cart')->middleware('auth');
Route::post('/cart/remove', [CartController::class, 'remove'])->name('remove')->middleware('auth');
Route::post('/cart/update', [CartController::class, 'update'])->name('update')->middleware('auth');
