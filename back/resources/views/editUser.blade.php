@extends('layouts.app')

@section('template_title')
Update User
@endsection

@section('content')
<div class="container">
    <h1>Edit User</h1>
    <form method="POST" action="{{ route('updateUser', $user->id) }}" enctype="multipart/form-data">
        @csrf
        {{ method_field('PATCH') }}

        <div class="form-group">
            <label for="userName">Nombre de Usuario</label>
            <input type="text" name="userName" id="userName" class="form-control{{ $errors->has('userName') ? ' is-invalid' : '' }}" value="{{ $user->userName }}" required>
            @if ($errors->has('userName'))
                <span class="invalid-feedback">{{ $errors->first('userName') }}</span>
            @endif
        </div>

        <div class="form-group">
            <label for="email">Correo</label>
            <input type="email" name="email" id="email" class="form-control{{ $errors->has('email') ? ' is-invalid' : '' }}" value="{{ $user->email }}" min="0" required>
            @if ($errors->has('stockQuantity'))
                <span class="invalid-feedback">{{ $errors->first('email') }}</span>
            @endif
        </div>

        <button type="submit" class="btn btn-primary">Save</button>
        <a href="{{ route('usersList') }}" class="btn btn-secondary">Cancel</a>
    </form>
</div>

@endsection
