import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, ModalController, NavParams } from '@ionic/angular';
import { People } from '../models/people.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modal-show-people',
  templateUrl: './modal-show-people.page.html',
  styleUrls: ['./modal-show-people.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class ModalShowPeoplePage implements OnInit {
  @Input() students: People[] = [];
  Course:string="";
  Total:number=0;

  constructor(private modalController:ModalController,
    private navParams:NavParams,
    private router: Router) {}

  ngOnInit() {
    this.Course = this.navParams.get('course');
    this.contStudents();
  }
 // ! Metodo contar cantidad de estudiantes de un curso
 contStudents(){
  this.Total = this.students.length;
}

goToHomePage() {
  // Navegar de regreso a la página principal
  this.modalController.dismiss();
}


}
