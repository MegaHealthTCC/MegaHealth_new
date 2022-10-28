import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Categoria } from 'src/app/models/Categoria';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DropdownBasicService {

  constructor(private http: HttpClient) {}

  getAll(): Observable<Categoria[]>{
    return this.http.get<Categoria[]>(`${environment.mainUrl}/api/Categoria`)
  }
}
