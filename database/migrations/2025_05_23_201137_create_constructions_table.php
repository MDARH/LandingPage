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
        Schema::create('constructions', function (Blueprint $table) {
            $table->id();
            $table->string('domain')->unique();
            $table->string('logo_path')->nullable(); // path to uploaded logo
            $table->text('content')->nullable(); // main content text
            $table->enum('status', ['active', 'inactive'])->default('active');
            $table->string('bg_color')->default('#ffffff');
            $table->string('text_color')->default('#000000');
            $table->boolean('has_countdown')->default(false);
            $table->dateTime('countdown_date')->nullable();
            $table->json('social_links')->nullable(); // Store all links as JSON
            $table->string('platform')->nullable(); // e.g., facebook, twitter, linkedin
            $table->string('url')->nullable(); // social link
            $table->string('icon_class')->nullable(); // e.g., fa-brands fa-facebook
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('constructions');
    }
};
