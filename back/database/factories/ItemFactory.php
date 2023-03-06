<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Item>
 */
class ItemFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            //
            'user_id' => fake()->randomDigit(1, 100),
            'itemName'=> fake()->name(),
            'category'=>fake()->randomElement(['Bolsos', 'Accesorios', 'Material de oficina']),
            'description'=> fake()->realText(),
            'image'=> fake()->imageUrl($width = 640, $height = 480),
            'stockQuantity'=> fake()->numberBetween(1, 3),
            'purchaseQuantity' => fake()->numberBetween(1, 100),
            'price' => fake()->numberBetween(1, 100),
        ];
    }
}
