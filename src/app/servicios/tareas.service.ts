import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tarea } from '../interfaces/tarea';

@Injectable({
  providedIn: 'root'
})
export class TareasService {

  private API_TAREAS = 'https://mi-proyecto-de73d-default-rtdb.firebaseio.com';

  constructor(private http: HttpClient) { }


  postTarea(tarea: any): Observable<any> {
    return this.http.post(`${this.API_TAREAS}/tareas.json`, tarea);
  }


  getTareas(): Observable<any> {
    return this.http.get(`${this.API_TAREAS}/tareas.json`);
  }


  getTareaById(id: string): Observable<any> {
    return this.http.get(`${this.API_TAREAS}/tareas/${id}.json`);
  }


  putTarea(id: string, tarea: any): Observable<any> {
    return this.http.put(`${this.API_TAREAS}/tareas/${id}.json`, tarea);
  }


  deleteTarea(id: string): Observable<any> {
    return this.http.delete(`${this.API_TAREAS}/tareas/${id}.json`);
  }

  getTareaPorId(id: string): Observable<Tarea> {
  return this.http.get<Tarea>(`${this.API_TAREAS}/tareas/${id}.json`);
}

}
