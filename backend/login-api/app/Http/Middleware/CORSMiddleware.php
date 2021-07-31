<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;

class CORSMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle(Request $request, Closure $next)
    {
        //Intercepts OPSTIONS requests
        if($request->isMethod('OPTIONS')){
            $response = \response('', 200);
        }else{
            $response = $next($request);
        }

            $response->header('Acess-Control-Allow-Origin', "*");
            $response->header('Acess-Control-Allow-Methods', 'PUT, GET, POST,DELETE, OPTIONS, PATCH');
            $response->header('Acess-Control-Allow-Headers',$request->header('Acess-Control-Request-Headers'));
            $response->header('Acess-Control-Allow-Crendetials', 'true');
            $response->header('Accept', 'application/json');
            $response->header('Acess-Control-Expose-Headers','lcoation');
            return $response;
    }
}
