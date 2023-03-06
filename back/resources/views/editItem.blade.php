@extends('layouts.app')

@section('template_title')
    Update Item
@endsection

@section('content')
    <section class="content container-fluid">
        <div class="">
            <div class="col-md-12">

                <div class="card card-default">
                    <div class="card-header">
                        <span class="card-title">Update Item</span>
                    </div>
                    <div class="card-body">
                        <form method="POST" action="{{ route('updateItem', $item->id) }}"  role="form" enctype="multipart/form-data">
                            {{ method_field('PATCH') }}
                            @csrf
                            <h3 class="topTitle">Item details</h3>
                            <div>
                                <label class="form-label">Item Name</label>
                                <input value="{{$item->itemName}}" type="text" class="" name="itemName">
                            </div>
                            <div>
                                <label class="form-label">Category</label>
                                <input value="{{$item->category}}" type="text" class="" name="category">
                            </div>
                            <div>
                                <label class="form-label">Description</label>
                                <input value="{{$item->description}}" type="text" class="" name="description">
                            </div>
                            <div>
                                <label class="form-label">Image</label>
                                <input value="{{$item->image}}" type="text" class="" name="image">
                            </div>
                            <div>
                                <label class="form-label">Stock Quantity</label>
                                <input value="{{$item->stockQuantity}}" type="number" class="" name="stockQuantity">
                            </div>
                            <div>
                                <label class="form-label">Purchase Quantity</label>
                                <input value="{{$item->purchaseQuantity}}" type="number" class="" name="purchaseQuantity">
                            </div>
                            <div>
                                <label class="form-label">Price</label>
                                <input value="{{$item->price}}" type="number" class="" name="price">
                            </div>

                            <div class="buttonsCreateForm" style="text-decoration:none">    
                                <div class="btnCreateBox">
                                    <button type="submit" class="buttonCreateForm" style="text-decoration:none" value="create">Save</button>
                                </div>

                                <div class="btnCancelBox">
                                    <a style="text-decoration:none" href="{{ route('home') }}">Cancel</a>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
@endsection