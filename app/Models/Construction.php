<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Construction extends Model
{
    protected $fillable = [
        'domain',
        'logo_path',
        'content',
        'bg_color',
        'text_color',
        'has_countdown',
        'countdown_date',
        'social_links',
    ];

    protected $casts = [
        'social_links' => 'array',
        'has_countdown' => 'boolean',
        'countdown_date' => 'datetime',
    ];
}
