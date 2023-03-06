<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Item;
use App\Models\User;
use App\Http\Controllers\Controller;

class ItemController extends Controller
{
    public function index()
    {
        $items = Item::paginate();

        return view('item.index', compact('items'))
            ->with('i', (request()->input('page', 1) - 1) * $items->perPage());
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $item = new Item();
        $user = User::pluck('name', 'id');
        return view('create', compact('item', 'user'));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        request()->validate(Item::$rules);

        $item = Item::create($request->all());

        return redirect()->route('home')
            ->with('success', 'Item created successfully.');
    }
}
