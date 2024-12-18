import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Router } from '@angular/router';
import { tap } from 'rxjs/operators';

export interface LoginResponse {
  token: string;
  rol: string;
  nombreUsuario: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'https://localhost:7032/api/Auth'; // URL base del backend
  private isLoggedInSubject = new BehaviorSubject<boolean>(this.hasToken());

  constructor(private http: HttpClient, private router: Router) {}

  // Método de Login
  login(credentials: { nombreUsuario: string; passwordHash: string }): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${this.apiUrl}/login`, credentials).pipe(
      tap((res) => {
        localStorage.setItem('token', res.token);
        localStorage.setItem('rol', res.rol);
        this.isLoggedInSubject.next(true);
      })
    );
  }

  // Verificar si hay token
  private hasToken(): boolean {
    return !!localStorage.getItem('token');
  }

  // Cerrar sesión
  logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('rol');
    this.isLoggedInSubject.next(false);
    this.router.navigate(['/login']);
  }

  // Verificar si está autenticado
  isAuthenticated(): Observable<boolean> {
    return this.isLoggedInSubject.asObservable();
  }

  // Obtener el rol del usuario
  getUserRole(): string | null {
    return localStorage.getItem('rol');
  }

  // Obtener el token
  getToken(): string | null {
    return localStorage.getItem('token');
  }
}
