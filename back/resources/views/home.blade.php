@extends('layouts.app')

@section('content')
<div class="itemscontainer conttainer-fluid">
    <h1>Listado de productos</h1>
    @foreach ($items as $item)
        

    <div>
        <h3>Producto</h3>
        {{$item->itemName}}</p>
        {{$item->category}}/
        {{$item->description}}/
        {{$item->image}}          
    </div>
    @endforeach 

</div>
@endsection
