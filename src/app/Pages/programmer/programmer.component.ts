import { Component } from '@angular/core';
import { MainNavBarComponent } from "../main-nav-bar/main-nav-bar.component";

@Component({
  selector: 'app-programmer',
  standalone: true,
  imports: [MainNavBarComponent],
  templateUrl: './programmer.component.html',
  styleUrl: './programmer.component.css'
})
export class ProgrammerComponent {

}
