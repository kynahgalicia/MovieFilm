<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Actor extends Model
{
    protected $fillable = ['name','birthday','notes'];
    protected $primaryKey = 'actor_id';
    use HasFactory;
}
