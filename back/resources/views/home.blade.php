@extends('layouts.app')
@section('content')
<div class="container">
    <h1>Listado de productos</h1>
    @if (Auth::check())
        <p>Hola <strong style="font-size:16px;color:blueviolet;">{{ Auth::user()?->name }}</strong> Este es el listado de productos</p>
        @if (session('success'))
            <div class="alert alert-success"><br>
                {{ session('success') }}
            </div>
        @endif
    @endif
        <div class="mb-3">
            <a href="{{ route('items.create') }}" class="btn btn-primary">Create Item</a>
        </div>
</div>
<div>
    <table class="table">
        <thead>
            <tr>
                <th>Nombre</th>
                <th>Categoría</th>
                <th>Descripción</th>
                <th>Imagen</th>
                <th>Stock</th>
                <th>Vendidos</th>
                <th>Precio</th>
                <th>Acciones</th>
            </tr>
        </thead>
        <tbody>
            @foreach ($items as $item)
                <tr>
                    <td>{{ $item->itemName }}</td>
                    <td>{{ $item->category }}</td>
                    <td>{{ $item->description }}</td>
                    <td><img src="{{ asset($item->image) }}" alt="{{ $item->itemName }}" class="img-thumbnail" style="max-width: 100px;"></td>
                    <td>{{ $item->stockQuantity }}</td>
                    <td>{{ $item->purchaseQuantity }}</td>
                    <td>{{ $item->price }}</td>
                    <td>
                        <a href="{{ route('items.show', $item->id) }}" class="btn btn-info btn-sm">VER</a><br>
                        <a href="{{ route('editItem',['id'=>$item->id]) }}" class="btn btn-success btn-sm">EDITAR</a><br>
                        <form action="{{ route('items.destroy', $item->id) }}" method="POST" style="display: inline-block;">
                            @csrf
                            @method('DELETE')
                            <button type="submit" class="btn btn-danger btn-sm" onclick="return confirm('Estás seguro de querer borrar este producto?')">BORRAR</button>
                        </form>
                        <form action="{{ route('add') }}" method="POST" style="display: inline-block;">
                            @csrf
                            <input type="hidden" name="item_id" value="{{ $item->id }}"> 
                            <input type="number" name="purchaseQuantity" class="form-control" value="1" min="1">
                            <button type="submit" class="btn btn-primary btn-sm">Añadir al carrito</button>
                        </form>
                        </td>
                    </tr>
                @endforeach
            </tbody>
        </table>
    </div>
</div>
@endsection