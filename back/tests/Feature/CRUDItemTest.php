<?php

namespace Tests\Feature;

use Tests\TestCase;
use App\Models\User;
use App\Models\Item;
use Illuminate\Foundation\Testing\WithFaker;
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
        $response -> assertSee($item->itemName);

        $response->assertStatus(200)
                ->assertViewIs('home');
    }

    public function test_canUpdateAnItem(){
        
        $this->withExceptionHandling();

        $item = Item::factory()->create();
        $this->assertCount(1, Item::all());

        $response = $this->patch(route('updateItem', $item->id),['itemName' => 'New itemName']);
        $this->assertEquals('New itemName', Item::first()->itemName);
    }


    public function test_anItemCanBeCreated(){
        $this->withExceptionHandling();


        $userAdmin = User::factory()->create(['isAdmin' => true]);
        $this->actingAs($userAdmin);

        $item = Item::factory()->create([
            'id' => $userAdmin->id
        ]);

        $response = $this
            ->actingAs($userAdmin)
            ->get(route('store', $item));

        $response->assertOk();


        // $userAdmin = User::factory()->create(['isAdmin' => true]);
        // $this->actingAs($userAdmin);

        // $response = $this->post(route('store'),
        // [
        //     'itemName'=> 'Palomada',
        //     'category'=> 'otras',
        //     'description'=> 'Esta es una descripción,bla bla!',
        //     'image'=> 'https://hilodoble.com/wp-content/uploads/2021/06/rinonera_colorful_1-scaled.jpg',
        //     'stockQuantity'=> '15',
        //     'purchaseQuantity'=> '1',
        //     'price'=> '20',
        // ]);
        // $this->assertCount(1, Item::all());


}

}

