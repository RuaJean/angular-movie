import { Component } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  // imports: [FormsModule],
  // standalone: true,
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  nombreUsuario: string = '';
  passwordHash: string = '';
  errorMessage: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  // Método para enviar los datos de login
  onLogin() {
    const credentials = { nombreUsuario: this.nombreUsuario, passwordHash: this.passwordHash };

    this.authService.login(credentials).subscribe({
      next: (response) => {
        this.authService.saveToken(response.token);
        this.router.navigate(['/empleados']);
        console.log("Entró");
      },
      error: (err) => {
        this.errorMessage = 'Usuario o contraseña incorrectos.';
        console.error(err);
      },
    });
  }
}
