import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class UserStory10Interceptor implements HttpInterceptor {

  constructor() {}

  intercept(req: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    req = req.clone({
      setHeaders: {
        Authorization: 'code.hub.ng5.tokenoken'
      }
    }); 
    
    
    return next.handle(req);

    // catchError(error => {
    //   console.log(error);
    //   return throwError(error);
    // })
  }
}
