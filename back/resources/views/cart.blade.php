@extends('layouts.app')

@section('content')
    <div class="container">
        <h1>Carrito de compras</h1>
        @if (count($cartItems) > 0)
            <table class="table">
                <thead>
                    <tr>
                        <th>Nombre del producto</th>
                        <th>Precio unitario</th>
                        <th>Cantidad</th>
                        <th>Precio total</th>
                    </tr>
                </thead>
                <tbody>
                    @foreach ($cartItems as $item)
                        <tr>
                            <td>{{ $item->itemName }}</td>
                            <td>{{ $item->price }}</td>
                            <td>{{ $item->quantity }}</td>
                            <td>${{ $item->price * $item->quantity }}</td>
                        </tr>
                    @endforeach
                    <tr>
                        <td colspan="3" class="text-right"><strong>Total:</strong></td>
                        <td><strong>${{ $item->price * $item->quantity  }}</strong></td>
                    </tr>
                </tbody>
            </table>
            <div class="text-center">
                <a href="/" class="btn btn-primary">Seguir comprando</a>
                <a href="#" class="btn btn-success">Pagar</a>
            </div>
        @else
            <p>No hay productos en el carrito.</p>
        @endif
    </div>
@endsection
