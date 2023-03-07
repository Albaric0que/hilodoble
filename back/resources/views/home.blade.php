@extends('layouts.app')

@section('content')

    <h1>Listado de productos</h1>
    @foreach ($items as $item)
        
    <div>
        <h3>Producto</h3>
        <a href="{{route ('showItem', $item->id)}}"> Ver Detalles de producto</a> 
        <img src="{{ asset($item->image) }}" alt="{{ $item->itemName }}" class="img-thumbnail" style="width: 100px; height:auto ;" width='100'>
        {{$item->itemName}}=>
        {{$item->category}}
        <p>Descripción:</p>
        {{$item->description}}/             
    </div>
    <form>
        <a href="{{ route('editItem',['id'=>$item->id]) }}">✏</a>
    </form>
    @endforeach 
</div>
@endsection
