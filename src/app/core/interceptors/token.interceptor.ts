import {
    HttpRequest,
    HttpResponse,
    HttpHandler,
    HttpEvent,
    HttpInterceptor
} from '@angular/common/http';
import {tap} from 'rxjs/operators';
import { environment as env } from '../../../environments/environment';
import { Injectable } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

    constructor(
        private authService: AuthService
    ){}

    intercept(req: HttpRequest<any>, next: HttpHandler) {
        if (req.url.endsWith(`/user/${env.APP_KEY}`) || req.url.endsWith('/login')) {
           req = req.clone({
               setHeaders: {
                   'Authorization': `Basic ${btoa(`${env.APP_KEY}:${env.APP_SECRET}`)}`,
                   'Content-Type': 'application/json'
               }
           })
        } else {
            req = req.clone({
                setHeaders: {
                    'Authorization': `Kinvey ${this.authService.token}`
                }
            })
        }
        return next.handle(req)
            .pipe(
                tap((event: HttpEvent<any>) => {
                    if(event instanceof HttpResponse && req.url.endsWith('login')) {
                        this.authService.saveUserInfo(event.body)
                    }
                })
            )
    }
}