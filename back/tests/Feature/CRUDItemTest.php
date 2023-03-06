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

        /* $userTeacher = User::factory()->create(['isAdmin'=> true]);
        $this->ActingAs($userTeacher);  */

        $item = Item::factory()->create();
        $this->assertCount(1, Item::all());

        $response = $this->patch(route('updateItem', $item->id),['name' => 'New Name']);
        $this->assertEquals('New Name', Item::first()->name);

        /*  $userTeacher = User::factory()->create(['isTeacher'=> true]);
        $this->ActingAs($userTeacher);     
        $response = $this->patch(route('updateGrade', $grade->id), ['maths1' => '1']);
        $this->assertEquals('1', Grade::first()->maths1); */

        /* $userNoTeacher = User::factory()->create(['isTeacher'=> true]);
        $this->ActingAs($userNoTeacher);     
        $response = $this->patch(route('updateGrade', $grade->id), ['maths1' => '1']);
        $this->assertEquals('1', Grade::first()->maths1); */
    }
}
