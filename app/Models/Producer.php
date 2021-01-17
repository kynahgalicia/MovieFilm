<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Producer extends Model
{
    protected $fillable = ['name','birthday','notes'];
    protected $primaryKey = 'producer_id';
    use HasFactory;
}
