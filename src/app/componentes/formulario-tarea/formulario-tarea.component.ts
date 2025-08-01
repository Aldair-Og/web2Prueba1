import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TareasService } from '../../servicios/tareas.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-formulario-tarea',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './formulario-tarea.component.html',
  styleUrls: ['./formulario-tarea.component.css']
})
export class FormularioTareaComponent {

  titulo: string = '';
  descripcion: string = '';
  fechaVencimiento: string = '';
  completada: boolean = false;  
  etiquetas: string = '';
  responsable: string = '';
  categoria: string = '';

  constructor(private tareasService: TareasService) {}

  guardarTarea(formulario: any) {
    this.tareasService.postTarea(formulario.value).subscribe(() => {
      window.location.reload();
    });
  }
}
