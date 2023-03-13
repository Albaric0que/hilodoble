<?php

namespace App\Http\Controllers;

use App\Models\Item;
use App\Models\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class CartController extends Controller
{
    public function add(Request $request)
    {
        $user = auth()->user();
        $item = Item::findOrFail($request->input('item_id'));

        $cartItem = $user->cart()->where('item_id', $item->id)->first();

        if ($cartItem) {
            $cartItem->quantity++;
            $cartItem->save();
        } else {
            $user->cart()->create([
                'item_id' => $item->id,
            ]);
        }

        return redirect('/cart');
    }

    public function show()
{
    $user = auth()->user();
    $cartItems = $user->cart()->with('item')->get();

    return view('cart', [
        'cartItems' => $cartItems,
    ]);
}


public function remove(Request $request)
{
    $user = auth()->user();
    $item = Item::findOrFail($request->input('item_id'));

    $cartItem = $user->cart()->where('item_id', $item->id)->first();

    if ($cartItem && $cartItem->quantity > 1) {
        $cartItem->quantity--;
        $cartItem->save();
    } elseif ($cartItem) {
        $cartItem->delete();
    }

    return redirect('/cart');
}

}
