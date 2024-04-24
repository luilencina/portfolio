import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})

export class AppComponent {
  title = 'portfolio';

  buttonMenu(params: any) {
    for (let i = 0; i <= 5; i++) {
      var element = document.getElementById(i.toString());
      if(element) element.classList.remove("active"); 
      if(params == i && element) element.className = 'active';
    }
  }
} 



