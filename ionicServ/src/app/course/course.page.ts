import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, ModalController } from '@ionic/angular';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import{Router,RouterModule} from'@angular/router';
import { Course } from '../models/courses.model';
import { ServicesService } from '../services/services.service';
import { ModalShowPeoplePage } from '../modal-show-people/modal-show-people.page';
import { People } from '../models/people.model';


@Component({
  selector: 'app-course',
  templateUrl: './course.page.html',
  styleUrls: ['./course.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule,
    HttpClientModule,RouterModule],
    providers:[ServicesService]
    
})
export class CoursePage implements OnInit {
//Declarar variables
  cours:Course [] = [];
  people: People[] = [];
  searchText: string = '';

  

  constructor( private router: Router,
    private courseService : ServicesService,
    private modalController:ModalController,
    private peopleService : ServicesService) { }

  ngOnInit() {
    this.ListCourses();
  }


  // funcion listar Cursos
  ListCourses(){
    this.courseService.getCourse().subscribe({
        next:(dat)=>{
          this.cours= dat.data;
        }
      });
  }



  async showPeople(course: string) {
    // Listar personas
    const peopleResponse = await this.peopleService.getPeople().toPromise();

    if (!peopleResponse || !peopleResponse.data) {
      return;
    }

    // Obtener el texto de búsqueda en minúsculas
    const searchTextEnMinusculas = this.searchText.toLowerCase();

    // Filtrar personas según el nombre o el curso
    const filteredStudents: People[] = peopleResponse.data.filter((person) => {
      const nombreEnMinusculas = person.nombre.toLowerCase();

      // Verificar si el campo de búsqueda coincide con el nombre o el curso
      return nombreEnMinusculas.includes(searchTextEnMinusculas) && person.curso === course;
    });

    // Crear y mostrar el modal
    const modal = await this.modalController.create({
      component: ModalShowPeoplePage,
      componentProps: {
        students: filteredStudents,
        course: course,
      },
    });

    await modal.present();
  }


  goToHomePage() {
    // Navegar de regreso a la página principal
    this.router.navigate(['students']); 
  }

  
}

