<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;
use App\Models\Item;

class ItemTest extends TestCase
{
    use RefreshDatabase;
    /**
     * A basic feature test example.
     */
    public function test_example(): void
    {
        $response = $this->get('/');

        $response->assertStatus(200);
    }

    /* public function test_an_item_can_be_deleted_api()
    {
        $item = factory(Item::class)->create();

        $response = $this->json('DELETE', 'api/items/{$item->id}');

        $response->assertStatus(200);
        $response->assertJson(['message' => 'El producto se ha eliminado correctamente']);
    }  */

     public function test_an_item_can_be_deleted()
    {
        $this->withoutExceptionHandling();

        $item = factory(Item::class)->create();

        $response = $this->delete(route('delete', $item->id));
        $this->assertCount(0, Item::all());

    }

}
