<?php

namespace App\Http\Controllers; 

use App\Models\Item;
use Illuminate\Http\Request; 

class ItemController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $items = Item::get();
        
        return view ('home', compact('items')); 
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $item = Item::find($id);
        return view('showItem',compact('item'));
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

     /*   public function destroy(string $id)
    {
        Item::destroy($id);
        return response()->json(['message' => 'El producto se ha eliminado correctamente'], 200);
    } */

     public function destroy($id)
    {
        Item::destroy($id);

        return redirect()->route('home');
    }
}