
@foreach ($users as $user)
    <div></div>
    
    <a href="{{ route('editGrade', ['id' => $grade->id]) }}">Edit</a>

    <form action="{{route('deleteUser', ['id' => $user->id] }}" method="post">
        @method('delete')
        @csrf
        <button type="submit" class="bt-adm m-1 d-flex justify-content-center align-items-center" onclick="return confirm('¿Seguro que quieres borrar est usuario? {{ $user->name }} - ID {{ $user->id }}')">Remove</button>
    </form>
@endforeach
