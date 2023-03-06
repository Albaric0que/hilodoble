@extends('layouts.app')

@section('content')

    <h1>Listado de productos</h1>
    @foreach ($items as $item)
        
    <div>
        <h3>Producto</h3>
        {{$item->itemName}}</p>
        {{$item->category}}/
        {{$item->description}}/
        {{$item->image}}          
    </div>
    <form>
        <a href="{{ route('editItem',['id'=>$item->id]) }}">✏</a>
    </form>
    @endforeach 
</div>
@endsection
