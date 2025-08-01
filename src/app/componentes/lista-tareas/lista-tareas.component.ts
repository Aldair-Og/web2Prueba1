import { Component } from '@angular/core';
import { TareasService } from '../../servicios/tareas.service';
import { Tarea } from '../../interfaces/tarea';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-lista-tareas',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './lista-tareas.component.html',
  styleUrls: ['./lista-tareas.component.css']
})
export class ListaTareasComponent {

  tareas: Tarea[] = [];

  constructor(private tareasService: TareasService) { }

  ngOnInit() {
    this.tareasService.getTareas().subscribe(data => {
      this.tareas = Object.keys(data).map(key => ({
        id: key, ...data[key]
      }));
    });
  }

  eliminarTarea(id: string): void {
    this.tareasService.deleteTarea(id).subscribe(() => {
      this.tareas = this.tareas.filter(tarea => tarea.id !== id);
    }, error => {
      console.error('No se puede eliminar la tarea', error);
    });
  }
}
