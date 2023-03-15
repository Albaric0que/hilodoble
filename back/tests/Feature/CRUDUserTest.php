<?php

namespace Tests\Feature;

use Tests\TestCase;
use App\Models\User;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;

class CRUDUserTest extends TestCase
{
    /**
     * A basic feature test example.
     */

    use RefreshDatabase;

    public function test_example(): void
    {
        $response = $this->get('/');

        $response->assertStatus(200);
    }

    public function test_listUserCanBeReadByAnAdmin(){
        $this->withExceptionHandling();

        $users=User::factory(2)->create();
        $user=$users[0];

        $response = $this->get('/usersList');

        $response->assertSee($user->name);

        $response->assertStatus(200)
            ->assertViewIs('usersList');
    }

    public function test_anUserCanBeShowedByAnUser()
    {
        $this->withExceptionHandling();

        $user = User::factory()->create();
        $this->assertCount(1, User::all());

        $response = $this->get(route('showUser', $user->id));
        $response->assertSee($user->userName);
        $response->assertStatus(200)
                ->assertViewIs('showUser');

    }

    public function test_anUserCanBeDeletedByAnAdminAndByAnUser()
    {
        $this->withExceptionHandling();

        $user = User::factory()->create(['isAdmin'=>false]);
        $this->assertCount(1, User::all());
        $this->actingAs($user);

        $response = $this->delete(route('deleteUser', $user->id));
        $this->assertCount(0, User::all());
/*         $response->assertStatus(403);
 */

        $userAdmin = User::factory()->create(['isAdmin'=>true]);
        $this->actingAs($userAdmin);

        $response = $this->delete(route('deleteUser', $user->id));
        $this->assertCount(0, User::all());


    }

    public function test_AnItemCanBeUpdatedByAnAdminAndByAnUser(){

        $this->withExceptionHandling();

        $user = User::factory()->create();
        $this->assertCount(1, User::all());

        $userAdmin = User::factory()->create(['isAdmin'=>true]);
        $this->actingAs($userAdmin);

        $response = $this->patch(route('editUser', $user->id),['userName' => 'New userName']);
        $this->assertEquals('New userName', User::first()->userName);

        $user = User::factory()->create(['isAdmin'=>false]);
        $this->actingAs($user);

        $response = $this->patch(route('editUser', $user->id),['userName' => 'Second userName']);
        $this->assertEquals('New userName', User::first()->userName);
    }

}

