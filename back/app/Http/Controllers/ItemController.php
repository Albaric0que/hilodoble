<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Item;

class ItemController extends Controller
{
    public function index()
    {
        $items = Item::all();
        return response()->json($items);
    }

    public function store(Request $request)
    {
        $item = Item::create($request->all());
        return response()->json($item);
    }

    public function show($id)
    {
        $item = Item::find($id);
        return response()->json($item);
    }

    public function update(Request $request, $id)
    {
        $item = Item::find($id);
        $item->update($request->all());
        return response()->json($item);
    }

    public function destroy($id)
    {
        Item::destroy($id);
        return response()->json(['message' => 'Item deleted']);
    }
}

