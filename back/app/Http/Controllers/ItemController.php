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
        // var_dump($items);
    }


    /**
     * Display a form for creating a new item.
     *
     * @return \Illuminate\View\View
     */

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



public function create()
{
    $item = new Item();
    return view('createItem', compact('item'));
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

   // Creación y almacenamiento del libro
   $item = new Item();
   $item->itemName = $request->itemName;
   $item->category = $request->category;
   $item->description = $request->description;
   $item->image = $request->image;
   $item->stockQuantity = $request->stockQuantity;
   $item->purchaseQuantity = $request->purchaseQuantity;
   $item->price = $request->price;
   $item->save();

   return redirect()->route('home')
            ->with('success', 'Item created successfully');
}

}


