<?php

namespace App\Http\Controllers;

use App\Models\Item;

class HomeController extends Controller
{
    public function index()
    {
        $items = Item::paginate();

        return view('home', compact('items'));
    }
}

