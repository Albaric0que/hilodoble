<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Item;
use App\Models\User;
use App\Http\Controllers\Controller;

class ItemController extends Controller
{
    /**
     * Display a form for creating a new item.
     *
     * @return \Illuminate\View\View
     */
    public function create()
    {
        $item = new Item();
        $user = User::pluck('name', 'id');
        return view('create');
    }

    /**
     * Store a newly created item in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        // Validate the form data
        request()->validate(Item::$rules);
        $item = new Item(
            null,
            $request["itemName"],
            $request["category"],
            $request["description"],
            $request["image"],
            $request["stockQuantity"],
            $request["purchaseQuantity"],
            $request["price"],
        
        
        );
        $item->save();

        // Create a new item with the validated data
        $item = Item::create($validatedData);

        // Redirect to the item's page
        return redirect()->route('items.index')
        ->with('success', 'Item created successfully.');
    }
}
