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
        $items = Item::get();
        
        return view ('home', compact('items')); 
        /* var_dump($items); */
    }


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


    /**
     * Show the form for editing the specified resource.
     *
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    { 
        $item = Item::find($id);

        return view('editItem', compact('item'));
    }  

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @param  Item $item
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $item=request()->except('_token', '_method');

        Item::where('id', '=', $id)->update($item);

        return redirect()->route('home')
            ->with('success', 'Item updated successfully');
    }
}
