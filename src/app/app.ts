import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './navbar/navbar';
import { PruebamoduloModule } from './pruebamodulo/pruebamodulo-module';
import { Student } from './student/student';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [PruebamoduloModule,Student,Navbar,CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('proyecto-angular');
}
