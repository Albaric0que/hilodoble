<?php

namespace App\Http\Middleware\JwtAuth;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;
use Illuminate\Support\Facades\Auth;

class JwtAuth
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        $user = Auth::user();
        $requestedUserId = $request->route('id');
        
        if ($user->id !== (int)$requestedUserId) {
            return response()->json(['error' => 'Unauthorized'], 401);
        }

        return $next($request);
    }
}
