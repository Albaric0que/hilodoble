<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use App\Models\Item;
use App\Models\User;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        Item::factory()->create([
            'itemName'=> 'Riñonera',
            'category'=>'bolsos',
            'description'=>'Riñonera realizada con lona reciclada. Bolsillo posterior, cremallera y correa ajustable.',
            'image'=>'https://hilodoble.com/wp-content/uploads/2021/06/rinonera_colorful_1-scaled.jpg',
            'stockQuantity'=>'4',
            'purchaseQuantity'=>'1',
            'price'=>'15']);
    
        Item::factory(3)->create();
    }
}
