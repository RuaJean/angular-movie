import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  isAuthenticated = false;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    // Suscribirse al estado de autenticación
    this.authService.isAuthenticated().subscribe(authStatus => {
      this.isAuthenticated = authStatus;
    });
  }

  onLogout(): void {
    this.authService.logout();
  }
}
