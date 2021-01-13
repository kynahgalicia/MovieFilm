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
            $table->string('images');
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
            $table->string('images');
            $table->timestamps();
        });
        Schema::create('actor_movie_roles', function (Blueprint $table) {
            $table->bigInteger('actor_id')->unsigned();
            $table->foreign('actor_id')->references('actor_id')->on('actors')->onDelete('cascade')->onUpdate('cascade');
            $table->bigInteger('movie_id')->unsigned();
            $table->foreign('movie_id')->references('movie_id')->on('movies')->onDelete('cascade')->onUpdate('cascade');
            $table->bigInteger('role_id')->unsigned();
            $table->foreign('role_id')->references('role_id')->on('roles')->onDelete('cascade')->onUpdate('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::drop('actor_movie_roles');
        Schema::drop('movies');
        Schema::drop('roles');
        Schema::drop('genres');
        Schema::drop('producers');
        Schema::drop('actors');
    }
}
