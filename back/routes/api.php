<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\UserController;

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
Route::get('/', [UserController::class, 'index'])->name('usersApi');
Route::get('/home', [UserController::class, 'index'])->name('usersApi');
Route::get('/showUser/{id}', [UserController::class, 'show'])->name('showUserApi');

//D de CRUD
Route::delete('/deleteUser/{id}',[UserController::class,'destroy'])->name('destroyUserApi');

//C de CRUD
Route::post('/createUser',[UserController::class,'store'])->name('createUserApi');

//U de CRUD
Route::put('/updateUser/{id}', [UserController::class,'update'])->name('updateUserApi');
