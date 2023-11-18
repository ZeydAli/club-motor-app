<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Symfony\Component\HttpFoundation\Response;

class ShareAuthData
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        $authData = [
            'auth' => [
                'user' => Auth::user(), // Include user information or any other auth data
                // Add any additional auth-related data here...
            ]
        ];

        Inertia::share($authData);
        
        return $next($request);
    }
}
