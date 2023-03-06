<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // \App\Models\User::factory(10)->create();

        // \App\Models\User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);

         Item::factory()->create([
            'itemName' => 'Bolso',
            'category' => 'Bolsos',
            'description' => 'Bolso de mano de lona',
            'image' => '',
            'stockQuantity' => '5',
            'purchaseQuantity' => '2',
            'price' => '20'
        ]
        );

        Item::factory(5)->create();
    }
}
