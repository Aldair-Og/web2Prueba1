import { Component } from '@angular/core';
import { TareasService } from '../../servicios/tareas.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-actualizar-tarea',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './actualizar-tarea.component.html',
  styleUrls: ['./actualizar-tarea.component.css']
})
export class ActualizarTareaComponent {

  id: string = '';
  tarea: any = { titulo: '', descripcion: '', fechaVencimiento: '' };

  constructor(
    private tareasService: TareasService,
    private router: Router,
    private ruta: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.ruta.params.subscribe(params => {
      this.id = params['id'];
      this.tareasService.getTareaById(this.id).subscribe(tarea => {
        this.tarea = tarea;
      });
    });
  }

  editarTarea(formulario: any): void {
    const tareaActualizada = { ...formulario.value, id: this.id };
    this.tareasService.putTarea(this.id, tareaActualizada).subscribe(() => {
      this.router.navigate(['/tareas']);
    });
  }
}
