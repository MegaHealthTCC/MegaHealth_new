import { Categoria } from './../../models/Categoria';
import { environment } from './../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MenuService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<Categoria[]>{
    return this.http.get<Categoria[]>(`${environment.mainUrl}/api/Categoria`)
  }
}
