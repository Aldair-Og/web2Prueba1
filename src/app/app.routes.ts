import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { TablaProductosComponent } from './componentes/tabla-productos/tabla-productos.component';
import { NosotrosComponent } from './componentes/nosotros/nosotros.component';

export const routes: Routes = [





    {path:'home', component:HomeComponent},
    {path: '', redirectTo:'/home', pathMatch:'full'},
    {path:'productos', component:TablaProductosComponent},
    {path: 'nosotros', component:NosotrosComponent}



































];

