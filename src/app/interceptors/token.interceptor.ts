import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpParams,
  HTTP_INTERCEPTORS,
} from '@angular/common/http';
import { TokenService } from '../services/token.service';
import { Observable } from 'rxjs';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(private tokenService: TokenService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = localStorage.getItem('access_token') ; 
     if(token){
                console.log(req) ; 
                const keys = req.params.keys() ; 
                let params = new HttpParams();
                    for(let index = 0 ;index<keys.length ; index++){
                        var test = req.params.get(keys[index]) ??''; 
                        params = params.append(keys[index],test); 
                    }
                
                params =params.append('access_token',token);
        const cloneReq = req.clone(
            {
                params: new HttpParams().set('access_token',token) 
            }, 
        )
        return next.handle(cloneReq) ; 
    } 
    else{
        return next.handle(req) ; 

    }
  }

}

export const LoginInterceptorProvider = {
  provide : HTTP_INTERCEPTORS , 
  useClass : TokenInterceptor , 
  multi : true 
  
}