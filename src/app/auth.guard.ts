import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const userRole = localStorage.getItem('role'); // Obtiene el rol del usuario

    if (!userRole) {
      this.router.navigate(['/auth/login']); // Redirige si no está autenticado
      return false;
    }

    // Verifica si el rol del usuario está permitido en la ruta
    const expectedRoles = route.data['roles'];
    if (expectedRoles && !expectedRoles.includes(userRole)) {
      this.router.navigate(['/not-authorized']); // Redirige si no tiene el rol adecuado
      return false;
    }

    return true;
  }
}
