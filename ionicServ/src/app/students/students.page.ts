import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import { ServicesService } from '../services/services.service';
import { People } from '../models/people.model';
import{Router,RouterModule} from'@angular/router';

@Component({
  selector: 'app-students',
  templateUrl: './students.page.html',
  styleUrls: ['./students.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, 
            HttpClientModule,RouterModule],
  providers:[ServicesService]
})
export class StudentsPage implements OnInit {


  //declaracion variables
  people: People[] = [];
  searchText: string = '';
  selectedPerson: People | null = null;
  

  constructor(private peopleService : ServicesService,
    private router: Router) { }

  ngOnInit() {
    this.ListStudents();
    this.filterStudents();
  }

//Navegacion
goPage(pag: string):void {
  this.router.navigateByUrl(pag); // Ruta a la página de cursos
  }

  // funcion listar Personas
  ListStudents(){
    this.peopleService.getPeople().subscribe({
      next: (dat) => {
        this.people = dat.data;
      }
      });
  }
  
 
//Mostrar cursos en que se encuentra cada persona
  showCurso(person: People) {
    this.selectedPerson = person;
  }


  //flitrar
  filterStudents() {
    if (!this.searchText) {
      // Si el campo de búsqueda está vacío, muestra todos los estudiantes
      this.ListStudents();
      return;
    }

    this.people = this.people.filter((person) =>
      person.nombre.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }
}
