import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DataRequestService } from './data-request.service';
import { environment } from 'src/environments/environment';


@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    constructor(private dataRequestService: DataRequestService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        const user = this.dataRequestService.userValue;
        const isLoggedIn = user && user.Token;
        const isApiUrl = request.url.startsWith(environment.api);
        if (isLoggedIn && isApiUrl) {
            request = request.clone({
                setHeaders: {
                    Authorization: `Bearer ${user.Token}`
                }
            });
        }

        return next.handle(request);
    }
}
