import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {

  constructor(private authorize: AuthService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log(`in intecepot`);
    req = req.clone({
      setHeaders: {
        Authorization: `Bearer ${this.authorize.getAccessToken()}`
      }
    });
    console.log(req);
    return next.handle(req);
  }


  private processRequestWithToken(token: string | null, req: HttpRequest<any>, next: HttpHandler) {
    console.log(`in intecepot`);
    req = req.clone({
      setHeaders: {
        Authorization: `Bearer ${this.authorize.getAccessToken()}`
      }
    });
    console.log(req);
    return next.handle(req);
  }
}
