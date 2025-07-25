import { Component } from '@angular/core';
import { Producto } from './productos';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tabla-productos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tabla-productos.component.html',
  styleUrl: './tabla-productos.component.css'
})
export class TablaProductosComponent {

  productos: Producto[] = [];
  constructor(private http: HttpClient) {

  }
  ngOnInit(): void {
    this.http.get<Producto[]>('assets/productos.json').subscribe(
      producto => {
        this.productos = producto;
      }
    )

  }

}
