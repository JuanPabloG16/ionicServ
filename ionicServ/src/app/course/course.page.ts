import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import{Router,RouterModule} from'@angular/router';
import { Course } from '../models/courses.model';
import { ServicesService } from '../services/services.service';


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
  

  constructor( private router: Router,
    private courseService : ServicesService) { }

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


  goToHomePage() {
    // Navegar de regreso a la página principal
    this.router.navigate(['students']); 
  }

  
}

