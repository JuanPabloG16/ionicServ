import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { People } from '../models/people.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(private http:HttpClient) { }
  getPeople(): Observable<People> { // Usa la interfaz Persona
    return this.http.get<People>(environment.people);
  }
}
