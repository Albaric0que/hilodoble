@extends('layouts.app')


@section('content')
    <div class ="text-center">
        <img src="{{$item->image}}" alt="foto del producto" width="100">
        <div>
            <h2>{{$item->itemName}}</h2>
            <h2>Categoría:{{$item->category}}</h2>
            <h3>{{$item->description}}</h3>
            <h4>{{$item->price}}</h4>
            <h4>{{$item->stockQuantity}} Unidades disponibles</h4>
            <h4>{{$item->purchaseQuantity}}</h4>
        </div>
    </div>
@endsection