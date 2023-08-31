import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import { ServicesService } from '../services/services.service';
import { People } from '../models/people.model';

@Component({
  selector: 'app-students',
  templateUrl: './students.page.html',
  styleUrls: ['./students.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, HttpClientModule],
  providers:[ServicesService]
})
export class StudentsPage implements OnInit {


  //declaracion variables
    name : People| null=null;
    edad : People| null=null;
    course : People| null=null;

  constructor(private peopleService : ServicesService) { }

  ngOnInit() {
  }

}
