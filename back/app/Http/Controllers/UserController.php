<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class UserController extends Controller
{
    public function usersList()
    {
        $users = User::paginate();

        return view('usersList', compact('users'))
            ->with('i', (request()->input('page', 1) - 1) * $users->perPage());
    }

    public function show(string $id)
    {
        $user = User::find($id);
        return view('showUser',compact('user'));
    }

    public function createUser()
    {
        $user = new User();
        return view('createUser', compact('user'));
    }

    public function destroy($id)
    {
    
        User::destroy($id);

        return redirect()->route('usersList');
    }

    public function update(Request $request, $id)
    {
        $user=request()->except('_token', '_method');

        User::where('id', '=', $id)->update($user);

        return redirect()->route('usersList')
            ->with('success', 'User updated successfully');
    }

/*
    public function storeUser(Request $request)
    {
        $validatedData = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|unique:users|max:255',
            'password' => 'required|string|min:6|confirmed',
        ]);

        $user = new User($validatedData);
        $surname = $request->file('image');
        $image = $request->file('image');
        $imageName = time() . '_' . $image->getClientOriginalName();
        $image->storeAs('public/images', $imageName);
        $user->image = 'storage/images/' . $imageName;
        $user->save();
        return redirect()->route('index')
            ->with('success', 'Estudiante creado.');
    }
*/
}
