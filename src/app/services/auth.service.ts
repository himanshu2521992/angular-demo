import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticated = false;

  constructor(private router: Router) { }

  login(username: string, password: string): boolean {
    // Replace with real authentication logic
    if (username === 'user' && password === 'password') {
      this.isAuthenticated = true;
      this.router.navigate(['/']);
      return true;
    }
    return false;
  }

  logout() {
    this.isAuthenticated = false;
    this.router.navigate(['/login']);
  }

  checkAuthentication(): boolean {
    return this.isAuthenticated;
  }
}
