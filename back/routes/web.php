<?php

use Illuminate\Support\Facades\Route;

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

Route::middleware('auth:sanctum')->get('/items', function (Request $request) {
    // Your code here...
});

Route::middleware('auth:sanctum')->post('/items', function (Request $request) {
    // Your code here...
});

Route::middleware('auth:sanctum')->put('/items/{id}', function (Request $request, $id) {
    // Your code here...
});

Route::middleware('auth:sanctum')->delete('/items/{id}', function (Request $request, $id) {
    // Your code here...
});
