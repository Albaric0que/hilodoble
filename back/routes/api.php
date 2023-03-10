<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\ItemController;

//C de Item Api
Route::post('/createItem', [ItemController::class, 'store'])->name('createItemApi');

//R de ItemApi
Route::get('/', [App\Http\Controllers\Api\ItemController::class, 'index'])->name('itemsApi');

//D de ItemApi
Route::delete('/deleteItem/{id}', [ItemController::class, 'destroy'])->name('deleteItemApi');
