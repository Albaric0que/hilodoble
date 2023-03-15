<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\User;


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

        User::factory()->create([
         'name' => 'admin',
         'surname' => 'admin admin',
         'email' => 'admin@admin.com',
         'password' => 'password', // password
         'phone' => '666123456',
         'country' => 'España',
         'city' => 'Málaga',
         'address' => 'Calle hilodoble, número 7',
         'postcode' => '29010',
         'isAdmin' => true
        ]);

        User::factory(5)->create();
    }

}
