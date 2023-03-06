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
            'itemName' => $this->faker->company(),
            'category' => $this->faker->company(),
            'description' => $this->faker->company(),
            'image' => $this->faker->company(),
            'stockQuantity' => $this->faker->biasedNumberBetween($min = 1, $max = 10, $function = 'sqrt'),
            'purchaseQuantity' => $this->faker->biasedNumberBetween($min = 1, $max = 10, $function = 'sqrt'),
            'price' => $this->faker->biasedNumberBetween($min = 1, $max = 10, $function = 'sqrt'),
        ];
    }
}
