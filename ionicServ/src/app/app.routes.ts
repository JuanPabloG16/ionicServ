import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'students',
    pathMatch: 'full',
  },
  {
    path: 'students',
    loadComponent: () => import('./students/students.page').then( m => m.StudentsPage)
  },
  {
    path: 'course',
    loadComponent: () => import('./course/course.page').then( m => m.CoursePage)
  },
];
