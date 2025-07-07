import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  isMenuOpen = false;
  isCompaniesOpen = false;
  
  companies = ['Meta', 'Apple', 'Amazon', 'Netflix', 'Google', 'Microsoft'];

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
    if (!this.isMenuOpen) {
      this.isCompaniesOpen = false;
    }
  }

  toggleCompanies(): void {
    this.isCompaniesOpen = !this.isCompaniesOpen;
  }
}