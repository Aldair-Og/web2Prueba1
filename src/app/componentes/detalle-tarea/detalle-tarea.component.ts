import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TareasService } from '../../servicios/tareas.service';
import { Tarea } from '../../interfaces/tarea';
import { CommonModule } from '@angular/common';


@Component({
  standalone: true,
  selector: 'app-detalle-tarea',
  imports: [CommonModule],
  templateUrl: './detalle-tarea.component.html',
  styleUrls: ['./detalle-tarea.component.css']
})
export class DetalleTareaComponent implements OnInit {
  tarea: Tarea| undefined;

  constructor(
    private route: ActivatedRoute,
    private tareaServicio: TareasService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.tareaServicio.getTareaById(id).subscribe(data => {
        this.tarea = data;
      });
    }
  }
}
