<?php

use Illuminate\Database\Seeder;
use App\Models\User;
use App\Models\Item;
use Illuminate\Support\Facades\DB;

class DatabaseSeeder extends Seeder
{
    public function run()
    {
        User::factory()->count(10)->create()->each(function ($user) {
            Item::factory()->count(5)->create(['user_id' => $user->id]);
        });
    }
}

