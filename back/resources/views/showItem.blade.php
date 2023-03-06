@extends('layouts.app')


@section('content')
    <div class ="text-center">
        <img src="{{$item->image}}" alt="foto del producto" width="100">
        <div>
            <h2>{{$item->itemName}}</h2>
            <h2>{{$item->category}}</h2>
            <h2>{{$item->description}}</h2>
            <h2>{{$item->price}}</h2>
            <h2>{{$item->stockQuantity}}</h2>
            <h2>{{$item->purchaseQuantity}}</h2>
        </div>
    </div>
@endsection