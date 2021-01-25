<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateRelationshipTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('actors', function (Blueprint $table) {
            $table->id('actor_id');
            $table->string('name');
            $table->date('birthday');
            $table->longText('notes');
            $table->timestamps();
        });
        Schema::create('producers', function (Blueprint $table) {
            $table->id('producer_id');
            $table->string('name');
            $table->date('birthday');
            $table->longText('notes');
            $table->timestamps();
        });
        Schema::create('genres', function (Blueprint $table) {
            $table->id('genre_id');
            $table->string('genre');
            $table->timestamps();
        });
        Schema::create('roles', function (Blueprint $table) {
            $table->id('role_id');
            $table->string('roles');
            $table->timestamps();
        });
        Schema::create('movies', function (Blueprint $table) {
            $table->id('movie_id');
            $table->string('title');
            $table->integer('year');
            $table->longText('plot');
            $table->bigInteger('genre_id')->unsigned();
            $table->foreign('genre_id')->references('genre_id')->on('genres')->onDelete('cascade')->onUpdate('cascade');
            $table->bigInteger('producer_id')->unsigned();
            $table->foreign('producer_id')->references('producer_id')->on('producers')->onDelete('cascade')->onUpdate('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::drop('movies');
        Schema::drop('roles');
        Schema::drop('genres');
        Schema::drop('producers');
        Schema::drop('actors');
    }
}
