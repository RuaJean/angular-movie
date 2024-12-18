import { Component } from '@angular/core';
import { AuthService } from '../../../auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  nombreUsuario: string = '';
  passwordHash: string = '';
  errorMessage: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit(): void {
    this.authService
      .login({ nombreUsuario: this.nombreUsuario, passwordHash: this.passwordHash })
      .subscribe({
        next: () => {
          this.router.navigate(['/entidades']);
        },
        error: () => {
          this.errorMessage = 'Credenciales incorrectas. Intente nuevamente.';
        },
      });
  }
}
