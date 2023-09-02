import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { People } from '../models/people.model';
import { Observable } from 'rxjs';
import { ResponsePeople } from '../models/responsePeople.model';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(private http:HttpClient) { }

  //servicio estudents
  getPeople(): Observable<ResponsePeople> { // Usa la interfaz Persona
    return this.http.get<ResponsePeople>(environment.people);
  }
}
