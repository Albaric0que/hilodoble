<?php

namespace Tests\Feature;

// use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;
use App\Models\Item;
use Illuminate\Foundation\Testing\RefreshDatabase;

class CRUDItemTest extends TestCase
{  
    use RefreshDatabase;
    
    public function test_listItemAppearInHomeView()
    {
        $this->withExceptionHandling();

        $items =Item::factory(2)->create();
        $item =$items[0];

        $response = $this->get('/');
        $response -> assertSee($item->name);

        $response->assertStatus(200)
                ->assertViewIs('home');
    }

    public function test_anItemCanBehowed()
    {
        $this->withExceptionHandling();

        $item = Item::factory()->create();
        $item->assertCount(1,Item::all());

        $response = $this->get(route('showItem',$item->id));
        $response ->assertSee($item->itemName);
        $response ->assertStatus(200)
                ->assertViewis('showItem');

    }
}
