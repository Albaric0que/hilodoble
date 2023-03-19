<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\UserController;
use App\Http\Controllers\AuthController;
use App\Http\Middleware\CheckUser;

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

//R de CRUD
/* Route::get('/', [UserController::class, 'index'])->name('usersApi');
Route::get('/home', [UserController::class, 'index'])->name('usersApi'); */
/* Route::get('/user/{id}', [UserController::class, 'show'])->middleware('auth', 'JwtAuth')->name('userApi'); */

//D de CRUD
/* Route::delete('/deleteUser/{id}',[UserController::class,'destroy'])->middleware('auth', 'JwtAuth')->name('destroyUserApi'); */

//C de CRUD
/* Route::post('/createUser',[UserController::class,'store'])->name('createUserApi'); */

//U de CRUD
/* Route::put('/updateUser/{id}', [UserController::class,'update'])->middleware('auth', 'JwtAuth')->name('updateUserApi'); */

//Auth group
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
