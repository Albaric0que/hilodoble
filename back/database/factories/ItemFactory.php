<?php

namespace Database\Factories;


use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;


class ItemFactory extends Factory
{

    public function definition()
    {
        return [
            'user_id' => fake()->randomDigit(1, 6),
            'itemName' => fake()->word(),
            'description' => fake()->sentence(),
            'stockQuantity' => fake()->numberBetween(1, 100),
        ];
    }
}

