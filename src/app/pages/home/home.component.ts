import { Component } from '@angular/core';
import { HeroComponent } from '../../componentes/hero/hero.component';
import { GridComponent } from "../../componentes/grid/grid.component";



@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeroComponent, GridComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
