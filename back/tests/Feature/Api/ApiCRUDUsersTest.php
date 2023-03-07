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

    public function test_CheckIfEventsListedInJsonFile()
    {
        User::factory(2)->create();
        $response = $this->get(route('usersApi'));
        $response->assertStatus(200)
        ->assertJsonCount(2);
    }
}
