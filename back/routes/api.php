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

/* Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
}); */

//R de CRUD
Route::get('/homeUser', [UserController::class, 'index'])->name('usersApi');

//D de CRUD
Route::delete('/deleteUser/{id}',[UserController::class,'destroy'])->name('destroyUserApi');

//C de CRUD
Route::post('/createUser',[UserController::class,'store'])->name('createUserApi');

//U de CRUD
Route::put('/updateUser/{id}', [UserController::class,'update'])->name('updateUserApi');
