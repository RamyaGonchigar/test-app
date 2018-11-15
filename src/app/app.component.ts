import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { LeftSideMenuComponent } from './left-side-menu/left-side-menu.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'test-app';
}
