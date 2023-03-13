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

    public function test_aUserCanBeShowInJson(): void
    {

        $user = User::factory()->create();

        $response = $this->get(route('showUserApi', $user->id));

        $response->assertStatus(200)
        ->assertJson([
            'name' => $user->name,
            'surname' => $user->surname,
            'email' => $user->email,
            'phone' => $user->phone,
            'address' => $user->address,
            'postcode' => $user->postcode,
            'isAdmin' => $user->isAdmin,
        ]);
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

        $data = [ "name" => "Regina Patata"];

        $response = $this->get(route('usersApi'));
        $response ->assertStatus(200)
                  ->assertJsonCount(1)
                  ->assertJsonFragment($data);

         $data = [ "surname" => "Papita"];
         $response ->assertJsonFragment($data);
         $data = [ "email" => "patata@example.com"];
         $response ->assertJsonFragment($data);
         $data = [ "email_verified_at" => null];
         $response ->assertJsonFragment($data);
         $data = [ "phone" => "+14075775576"];
         $response ->assertJsonFragment($data);
         $data = [ "address" => "La calle"];
         $response ->assertJsonFragment($data);
         $data = [ "postcode" => "29007"];
         $response ->assertJsonFragment($data);
         $data = [ "isAdmin" => 0];
         $response ->assertJsonFragment($data);
    }

    public function test_checkIfUserCanBeUpdated(): void
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

        $data = [ "name" => "Regina Patata"];

        $response = $this->get(route('usersApi'));
        $response ->assertStatus(200)
                  ->assertJsonCount(1)
                  ->assertJsonFragment($data);

        $response = $this->put(route('updateUserApi', ['id' => 1]), [
            "name" => "Regina Patatita",
            "surname" => "Papita",
            "email" => "patata@example.com",
            "password" => "patata",
            "phone" =>  "+14075775576",
            "address" => "La calle",
            "postcode" => "29007",
            "isAdmin" => 0,
        ]);

        $data = ['name' => 'Regina Patatita'];

        $response = $this->get(route('usersApi'));
        $response ->assertStatus(200)
                  ->assertJsonCount(1)
                  ->assertJsonFragment($data);
    }
}
