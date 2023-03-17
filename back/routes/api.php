<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\ItemController;

//R de ItemApi
Route::get('/', [App\Http\Controllers\Api\ItemController::class, 'index'])->name('itemsApi');

//S de ItemApi
