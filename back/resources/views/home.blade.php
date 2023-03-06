@extends('layouts.app')

@section('content')
    <div class="container">
        <h1>Welcome to the Item Store!</h1>
        <p>You can view your items below or create a new item.</p>

        <div class="mb-3">
            <a href="{{ route('items.create') }}" class="btn btn-primary">Create Item</a>
        </div>

        <table class="table">
            <thead>
                <tr>
                    <th>Item Name</th>
                    <th>Category</th>
                    <th>Description</th>
                    <th>Image</th>
                    <th>Stock Quantity</th>
                    <th>Purchase Quantity</th>
                    <th>Price</th>
                    <th>Actions</th>
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
                            <a href="{{ route('items.show', $item->id) }}" class="btn btn-info btn-sm">View</a>
                            <a href="{{ route('editItem',['id'=>$item->id]) }}">✏ EDIT</a>
                            <form action="{{ route('items.destroy', $item->id) }}" method="POST" style="display: inline-block;">
                                @csrf
                                @method('DELETE')
                                <button type="submit" class="btn btn-danger btn-sm" onclick="return confirm('Are you sure you want to delete this item?')">Delete</button>
                            </form>
                        </td>
                    </tr>
                @endforeach
            </tbody>
        </table>

        {{ $items->links() }}
    </div>

    
</div>
@endsection
