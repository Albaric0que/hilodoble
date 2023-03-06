<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('_item', function (Blueprint $table) {
            $table->id();
            $table->string('itemName');
            $table->string('category');
            $table->string('description');
            $table->string('image');
            $table->integer('stockQuantity');
            $table->integer('purchaseQuantity');
            $table->integer('price');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('_item');
    }
};
