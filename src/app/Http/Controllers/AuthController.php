<?php

namespace App\Http\Controllers;

use App\Http\Requests\RegisterPostRequest;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{    
    /**
     * Register a new user
     *
     * @param  \App\Http\Requests\RegisterPostRequest  $request
     * @return Illuminate\Http\Response
     */
    public function register(RegisterPostRequest $request)
    {
        $validatedData = $request->validated();
            
        $user = User::create([
            'name' => $validatedData['name'],
            'email' => $validatedData['email'],
            'password' => Hash::make($validatedData['password']),
        ]);
        
        $token = $user->createToken('auth_token')->plainTextToken;
        
        return response()->json([
            'access_token' => $token,
            'token_type' => 'Bearer',
        ]);
    }
}
