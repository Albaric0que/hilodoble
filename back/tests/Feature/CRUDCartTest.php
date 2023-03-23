<?php

namespace Tests\Feature;
use Illuminate\Auth\Middleware\IsAdmin;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;
use App\Models\Item;
use App\Models\User;
use App\Models\Cart;


class CRUDCartTest extends TestCase
{
    use RefreshDatabase;
    

    // In these examples, we're using the factory() method to create a new user and a new item, and then using the actingAs() method to authenticate the user. We're then using the post() method to submit a form to the /cart/add endpoint with the item_id and purchaseQuantity parameters.

    // After submitting the form, we're checking that the cart contains the expected item by retrieving the cart item from the database using the where() method. We're then using PHPUnit's assertNotNull() and assertEquals() methods to check that the cart item exists and has the expected values.

public function test_anAuthUserCanAddOneItemToTheCart()
{
    $this->withExceptionHandling();

    $user = User::factory()->create();
    $item = Item::factory()->create();

    $this->actingAs($user)->post(route('add'), [       
        'item_id' => $item->id,        
        'purchaseQuantity' => 1,    
    ]);

    $cartItem = $user->cart()->where('item_id', $item->id)->first();

    $this->assertNotNull($cartItem);
    $this->assertEquals($item->id, $cartItem->item_id);
    $this->assertEquals(1, $cartItem->purchaseQuantity);
}

public function test_anAuthUserCanAddMoreThanOneItemToTheCart()
{
    $this->withExceptionHandling();

    $user = User::factory()->create();
    $item = Item::factory()->create();

    $this->actingAs($user)->post(route('add'), [        'item_id' => $item->id,        'purchaseQuantity' => 2,    ]);

    $cartItem = $user->cart()->where('item_id', $item->id)->first();

    $this->assertNotNull($cartItem);
    $this->assertEquals($item->id, $cartItem->item_id);
    $this->assertEquals(2, $cartItem->purchaseQuantity);
}

public function test_anAuthUserCanUpdateThePurchaseQuantityOfItemsBeforeBuying()
{
    $this->withExceptionHandling();

    $user = User::factory()->create();
    $item = Item::factory()->create();
    $cartItem = $user->cart()->create([
        'item_id' => $item->id,
        'purchaseQuantity' => 1,
    ]);

    $newQuantity = 2;

    $this->actingAs($user)->post(route('update'), [
        'item_id' => $item->id,
        'purchaseQuantity' => $newQuantity,
    ]);

    $cartItem->refresh();

    $this->assertEquals($newQuantity, $cartItem->purchaseQuantity);
}


// In this test, we're creating an authenticated user using the User::factory() method and the actingAs() method. We're also creating two new items and adding them to the user's cart using the create() method on the user's cart() relationship.

// Next, we're using the post() method to submit a form to the /cart/remove endpoint with the item_id parameter set to the IDs of both items in the user's cart. This should remove all items from the user's cart.

// Finally, we're retrieving the user's cart using the get() method on the user's cart() relationship, and using PHPUnit's assertEmpty() method to check that the cart is now empty.


public function test_anUserCanRemoveEveryItemOfItsOwnCart()
{
    $this->withExceptionHandling();

    // Create an authenticated user
    $user = User::factory()->create();
    $this->actingAs($user);

    // Create some items and add them to the user's cart
    $item1 = Item::factory()->create();
    $item2 = Item::factory()->create();
    $cartItem1 = $user->cart()->create([
        'item_id' => $item1->id,
        'purchaseQuantity' => 1,
    ]);
    $cartItem2 = $user->cart()->create([
        'item_id' => $item2->id,
        'purchaseQuantity' => 1,
    ]);

    // Remove all items from the user's cart
    $this->post(route('remove'), ['item_id' => $item1->id]);
    $this->post(route('remove'), ['item_id' => $item2->id]);

    // Check that the user's cart is now empty
    $cartItems = $user->cart()->get();
    $this->assertEmpty($cartItems);
}




public function test_anUserCanSeeItsOwnCartWithTheItemsPurchase()
{
    $this->withExceptionHandling();

    // Create an authenticated user
    $user = User::factory()->create();
    $this->actingAs($user);

    // Create some items and add them to the user's cart
    $item1 = Item::factory()->create([
        'price' => 10.00,
    ]);
    $item2 = Item::factory()->create([
        'price' => 15.00,
    ]);
    $cartItem1 = $user->cart()->create([
        'item_id' => $item1->id,
        'purchaseQuantity' => 2,
    ]);
    $cartItem2 = $user->cart()->create([
        'item_id' => $item2->id,
        'purchaseQuantity' => 1,
    ]);

    // Get the user's cart and check that it contains the correct items with the correct purchase details
    $response = $this->get(route('cart'));
    $response->assertOk();
    $response->assertViewIs('cart');
    $response->assertSee($item1->itemName);
    $response->assertSee($item2->itemName);
    $response->assertSee($cartItem1->purchaseQuantity);
    $response->assertSee($cartItem2->purchaseQuantity);
    $response->assertSee($cartItem1->item->price * $cartItem1->purchaseQuantity);
    $response->assertSee($cartItem2->item->price * $cartItem2->purchaseQuantity);
}


}

