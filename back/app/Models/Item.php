<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Item extends Model
{
    use HasFactory;

    protected $fillable = [
        'itemName',
        'category',
        'description',
        'image',
        'stockQuantity',
        'purchaseQuantity',
        'price'
    ];
}
