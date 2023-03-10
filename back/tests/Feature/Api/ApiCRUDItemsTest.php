<?php

namespace Tests\Feature\Api;

use Tests\TestCase;
use App\Models\Item;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;

class ApiCRUDItemsTest extends TestCase
{
    /**
     * @return void
     */
    
    Use RefreshDatabase;
    
    public function test_ItemsListedInJson()
    {
        Item::factory(2)->create();

        $response = $this->get(route('itemsApi'));
        
        $response->assertStatus(200)
            ->assertJsonCount(2);

        $response = $this->delete(route('deleteItemApi', 1));

        $response = $this->get(route('itemsApi'));
        $response = $response->assertStatus(200)
            ->assertJsonCount(1);
    }

    /* public function test_canDeleteAnItem() 
    {
        $item = Item::factory()->create();

        $response = $this->deleteJson('/api/items/'.$item->id);

        $response->assertStatus(200);

        $this->assertDatabaseMissing('items', $item->toArray());
	} */
}
