import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Obtener el token del servicio de autenticación
    const token = this.authService.getToken();

    // Clonar la solicitud y agregar la cabecera de autorización si existe el token
    if (token) {
      const authReq = req.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`,
        },
      });
      return next.handle(authReq);
    }

    // Continuar con la solicitud original si no hay token
    return next.handle(req);
  }
}
