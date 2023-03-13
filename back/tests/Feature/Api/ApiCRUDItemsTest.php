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
    }
}