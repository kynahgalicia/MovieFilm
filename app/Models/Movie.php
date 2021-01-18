<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Movie extends Model
{
    use HasFactory;

    protected $fillable = ['title','year','plot','genre_id','producer_id'];
    protected $primaryKey = 'movie_id';
}
