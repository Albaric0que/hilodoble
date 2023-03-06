<?php

namespace Tests\Feature;

use App\Models\User;
use App\Models\Item;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Storage;
use Tests\TestCase;

class CreateStoreItemTest extends TestCase
{
    use RefreshDatabase;
    use WithFaker;
    public function test_An_Admin_Can_Create_New_item_with_an_image_url()
{
    $this->withExceptionHandling();

    $userAdmin = User::factory()->create(['isAdmin' => true]);
    $this->actingAs($userAdmin);

    // Create the item
    $responseCreate = $this->post(route('items.create'), [
        'itemName' => 'Riñonera',
        'category' => 'Some category', // provide a valid value for category
        'description' => 'Probando esto a ver como funciona lalalala ya cambiaremos los textos',
        'image' => 'https://hilodoble.com/wp-content/uploads/2021/06/rinonera_colorful_1-300x300.jpg', // provide a valid URL for image
        'stockQuantity' => '30',
        'purchaseQuantity' => '1',
        'price' => '30',
    ]);

    // Assert that the item was created successfully
    $this->assertCount(0, Item::all());

    // Store the item
    $responseStore = $this->post(route('items.create'), [
        'itemName' => 'Riñonera',
        'category' => 'Some category', // provide a valid value for category
        'description' => 'Probando esto a ver como funciona lalalala ya cambiaremos los textos',
        'image' => 'https://hilodoble.com/wp-content/uploads/2021/06/rinonera_colorful_1-300x300.jpg', // provide a valid URL for image
        'stockQuantity' => '30',
        'purchaseQuantity' => '1',
        'price' => '30',
    ]);

    // Assert that the item was stored successfully
    $this->assertCount(1, Item::all());
}

}


    //     // Create a user with admin privileges
    //     $admin = User::factory()->create(['isAdmin' => true]);
    //     $this->actingAs($isAdmin);
    
    //     // Submit a request to create a new item with an image URL
    //     $response = $this->post(route('items.store'), [
    //         'itemName' => 'Riñonera',
    //         'category' => 'Some category', // provide a valid value for category
    //         'description' => 'Probando esto a ver como funciona lalalala ya cambiaremos los textos',
    //         'image' => 'https://hilodoble.com/wp-content/uploads/2021/06/rinonera_colorful_1-300x300.jpg', // provide a valid URL for image
    //         'stockQuantity' => '30',
    //         'purchaseQuantity' => '1',
    //         'price' => '30',
    //     ]);
    
    //     $this->assertCount(1, Item::all());

    //     $userNoAdmin = User::factory()->create(['isAdmin' => false]);
    //     $this->actingAs($userNoAdmin);

    //     $response = $this->post(route('storeItem'),
    //     [
    //         'itemName' => 'Riñonera',
    //         'category' => 'Some category', // provide a valid value for category
    //         'description' => 'Probando esto a ver como funciona lalalala ya cambiaremos los textos',
    //         'image' => 'https://hilodoble.com/wp-content/uploads/2021/06/rinonera_colorful_1-300x300.jpg', // provide a valid URL for image
    //         'stockQuantity' => '30',
    //         'purchaseQuantity' => '1',
    //         'price' => '30',

    //     ]);

    //     $this->assertCount(1, Item::all());
    // }

    
