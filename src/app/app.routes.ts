import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

import { FormularioTareaComponent } from './componentes/formulario-tarea/formulario-tarea.component';
import { ListaTareasComponent } from './componentes/lista-tareas/lista-tareas.component';
import { ActualizarTareaComponent } from './componentes/actualizar-tarea/actualizar-tarea.component';
import { DetalleTareaComponent } from './componentes/detalle-tarea/detalle-tarea.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'tareas', component: FormularioTareaComponent },
    { path: 'lista-tareas', component: ListaTareasComponent },
    { path: 'tareas/:id', component: ActualizarTareaComponent },
    { path: 'detalle-tarea/:id', component: DetalleTareaComponent },
];
