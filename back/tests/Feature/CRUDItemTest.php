<?php

namespace Tests\Feature;

// use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;
use App\Models\User;
use App\Models\Item;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;

class CRUDItemTest extends TestCase
{
    use RefreshDatabase;

    public function test_canUpdateAnItem(){
        
        $this->withExceptionHandling();

        $item = Item::factory()->create();
        $this->assertCount(1, Item::all());

        $response = $this->patch(route('updateItem', $item->id),['itemName' => 'New itemName']);
        $this->assertEquals('New itemName', Item::first()->itemName);
    }
}

