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

    public function test_example(): void
    {
        $response = $this->get('/');

        $response->assertStatus(200);
    }

    public function test_CheckIfUsersListedInJsonFile(): void
    {
        User::factory(2)->create();
        $response = $this->get(route('usersApi'));
        $response->assertStatus(200)
        ->assertJsonCount(2);
    }

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

    public function test_checkIfUserCanBeCreated(): void
    {
        $response = $this->post(route('createUserApi'), [
        "name" => "Regina Patata",
        "surname" => "Papita",
        "email" => "patata@example.com",
        "password" => "patata",
        "phone" =>  "+14075775576",
        "address" => "La calle",
        "postcode" => "29007",
        "isAdmin" => 0,
        ]);

        $data = [ "email" => "patata@example.com"];

        $response = $this->get(route('usersApi'));
        $response ->assertStatus(200)
                  ->assertJsonCount(1)
                  ->assertJsonFragment($data);
    }
}
