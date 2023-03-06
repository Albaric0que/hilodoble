<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Item extends Model
{
    use HasFactory;


    static $rules = [
        'user_id' => 'required',
        'itemName' => 'required',
        'category' => 'required',
        'description' => 'required',
        'image' => 'required',
        'stockQuantity' => 'required',
        'purchaseQuantity' => 'required',
        'price' => 'required',
    ];


    protected $fillable = [
        'user_id',
        'itemName',
        'category',
        'description',
        'image',
        'stockQuantity',
        'purchaseQuantity',
        'price',
    ];


    public function user()
    {
        return $this->hasOne('App\Models\User', 'id', 'user_id');
    }



}
