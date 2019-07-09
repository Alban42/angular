import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin/admin.component';
import { Routes, RouterModule } from '@angular/router';

export const ADMIN_ROUTES: Routes = [
  {path: 'administrator', component: AdminComponent}
];

@NgModule({
  declarations: [AdminComponent],
  imports: [
    CommonModule,
    // Attention, ici on utilise forChild et non forRoute car on est dans un module.
    RouterModule.forChild(ADMIN_ROUTES)
  ]
})
export class AdminModule { }
