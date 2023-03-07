<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Item;

class itemController extends Controller
{
    /**
     * Remove the specified resource from storage.
     */
   /*  public function destroy(string $id)
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
