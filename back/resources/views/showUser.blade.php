
@foreach ($users as $user)
    <div>Juan pero en su página</div>

    <a href="{{ route('editUser', ['id' => $user->id]) }}">Edit</a>

    <form action="{{ route('deleteUser', $user->id) }}" method="POST">

        @csrf
        @method('DELETE')

        <button type="submit" class="bt-adm m-1 d-flex justify-content-center align-items-center" onclick="return confirm('¿Seguro que quieres borrar est usuario? {{ $user->name }} - ID {{ $user->id }}')">Remove</button>
    </form>
@endforeach
