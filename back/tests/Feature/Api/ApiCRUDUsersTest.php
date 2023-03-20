<?php

namespace Tests\Feature\Api;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use App\Models\User;
use Tests\TestCase;

class ApiCRUDUsersTest extends TestCase
{
    /**
     * A basic feature test example.
     * @return void
     */
    use RefreshDatabase;

//No entiendo nada :c

    /* public function test_checkIfUserGetsDeleted(): void
    {
        User::factory(2)->create();
        $response = $this->get(route('usersApi'));
        $response->assertStatus(200)
            ->assertJsonCount(2);

        $response = $this->delete(route('destroyUserApi', 1));

        $response = $this->get(route('usersApi'));
        $response->assertStatus(200)
            ->assertJsonCount(1);
    } */

   /*  public function test_checkIfUserCanBeUpdated(): void
    {
        $response = $this->post(route('registerUserApi'), [
            "name" => "Regina Patata",
            "surname" => "Papita",
            "email" => "patata@example.com",
            "password" => "patata",
            "phone" =>  "+14075775576",
            "city" =>  "Málaga",
            "address" => "La calle",
            "postcode" => "29007",
            "isAdmin" => 0,
        ]);

        $data = [ "name" => "Regina Patata"];

        $response = $this->get(route('profileUserApi'));
        $response ->assertStatus(200)
                  ->assertJsonCount(1)
                  ->assertJsonFragment($data);

        $response = $this->put(route('updateUserApi', ['id' => 1]), [
            "name" => "Regina Patatita",
            "surname" => "Papita",
            "email" => "patata@example.com",
            "password" => "patata",
            "phone" =>  "+14075775576",
            "city" =>  "Málaga",
            "address" => "La calle",
            "postcode" => "29007",
            "isAdmin" => 0,
        ]);

        $data = ['name' => 'Regina Patatita'];

        $response = $this->get(route('profileUserApi'));
        $response ->assertStatus(200)
                  ->assertJsonCount(1)
                  ->assertJsonFragment($data);
    } */
}
