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
        Schema::table('constructions', function (Blueprint $table) {
            $table->string('title')->nullable();
            $table->json('logo_path')->nullable()->change(); // ✅ MODIFY, not ADD
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('constructions', function (Blueprint $table) {
            $table->dropColumn('title'); // ✅ Properly remove the title column
            $table->string('logo_path')->nullable()->change(); // Revert back to string
        });
    }
};
