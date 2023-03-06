<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;
use App\Models\User;
use App\Models\Item;

class CreateStoreItemTest extends TestCase
{
    /**
     * A basic feature test example.
     */
    public function test_example(): void
    {
        $response = $this->get('/');

        $response->assertStatus(200);
    }

    public function testCreateReturnsCreateView()
    {
        $admin = User::factory()->create(['isAdmin' => true]);

        $response = $this->actingAs($admin)->get(route('users.create'));

        $response->assertStatus(200);
        $response->assertViewIs('user.create');
    }

    public function testStoreCreatesNewUser()
    {
        $admin = User::factory()->create(['isAdmin' => true]);
        $userData = User::factory()->make()->toArray();
        $userData['image'] = UploadedFile::fake()->create('avatar.jpg');
        $userData['password'] = 'password'; // Agregar campo password
        $userData['isAdmin'] = false; // Agregar campo isAdmin

        $response = $this->actingAs($admin)->post(route('users.store'), $userData);

        $response->assertRedirect(route('users.index'));
        $this->assertDatabaseHas('users', ['email' => $userData['email']]);
    }

}
