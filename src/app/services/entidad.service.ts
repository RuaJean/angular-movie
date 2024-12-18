import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EntidadService {
  private apiUrl = 'https://pruebatecnica-backend.azurewebsites.net/api/Entidades';

  constructor(private http: HttpClient) {}

  getAll(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}`);
  }

  getById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  create(entidad: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}`, entidad);
  }

  update(id: number, entidad: any): Observable<any> {
    const payload = {
      id,
      nombre: entidad.nombre,
      descripcion: entidad.descripcion,
    };
    return this.http.put<any>(`${this.apiUrl}/${id}`, payload);
  }
  

  delete(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }
}
