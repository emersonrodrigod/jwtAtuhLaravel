<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Tymon\JWTAuth\Exceptions\JWTException;
use JWTAuth;

class AuthController extends Controller
{
    public function login(Request $request)
    {
        $credentials = $request->only('email','password');

        try {
            $token = JWTAuth::attempt($credentials);

            if(!$token)
            {
                return response()->json(['error' => 'invalid_credentials'],401);
            }

            return response()->json(compact('token'));

        }catch (JWTException $ex){
            return response()->json(['error' => 'could_not_creat_token'],500);
        }


    }
}
