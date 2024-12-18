import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'https://pruebatecnica-backend.azurewebsites.net/api/Auth'; // URL base de tu backend
  private loggedIn = new BehaviorSubject<boolean>(this.hasToken());

  constructor(private http: HttpClient, private router: Router) {}

  // Verifica si existe un token almacenado
  private hasToken(): boolean {
    return this.isBrowser() ? !!localStorage.getItem('token') : false; // Maneja correctamente los entornos no navegadores
  }

  // Método para iniciar sesión
  login(credentials: { nombreUsuario: string; passwordHash: string }): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, credentials);
  }

  // Método para registrarse
  register(credentials: { nombreUsuario: string; passwordHash: string }): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, credentials);
  }

  // Guarda el token y actualiza el estado
  saveToken(token: string): void {
    if (this.isBrowser()) {
      localStorage.setItem('token', token);
      this.loggedIn.next(true);
    }
  }

  // Método para cerrar sesión
  logout(): void {
    if (this.isBrowser()) {
      localStorage.removeItem('token'); // Eliminar token si estamos en el navegador
    }
    this.loggedIn.next(false);
    this.router.navigate(['/login']); // Redirigir al inicio de sesión
  }

  // Devuelve el token JWT
  getToken(): string | null {
    return this.isBrowser() ? localStorage.getItem('token') : null;
  }

  // Observador para saber si el usuario está autenticado
  isAuthenticated(): Observable<boolean> {
    return this.loggedIn.asObservable();
  }

  // Verifica si está en el navegador
  private isBrowser(): boolean {
    return typeof window !== 'undefined' && typeof localStorage !== 'undefined';
  }
}


// {
//   "nombre": "Test User",
//   "cargo": "QA Tester",
//   "entidadId": 1
// }