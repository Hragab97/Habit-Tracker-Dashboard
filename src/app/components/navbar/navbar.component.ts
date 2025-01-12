import {Component} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import { RouterOutlet } from '@angular/router';
/**
 * @title Autosize sidenav
 */
@Component({
  selector: 'app-navbar',
  templateUrl: 'navbar.component.html',
  styleUrl: 'navbar.component.scss',
  imports: [MatSidenavModule, MatButtonModule, RouterOutlet],
})
export class NavbarComponent {
  showFiller = false;
}
