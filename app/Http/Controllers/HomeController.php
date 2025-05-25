<?php

namespace App\Http\Controllers;

use App\Models\Construction;
use Illuminate\Http\Request;
use Inertia\Inertia;

class HomeController extends Controller
{
    public function __invoke()
    {
        $domain = request()->getHost();
        $site = Construction::where('domain', $domain)->first();

        return Inertia::render('Home', [
            'logo' => $site->logo_path ? asset('storage/' . $site->logo_path) : null,
            'content' => $site->content,
            'bg_color' => $site->bg_color,
            'text_color' => $site->text_color,
            'social_links' => $site->social_links,
            'has_countdown' => $site->has_countdown,
        ]);
    }
}
