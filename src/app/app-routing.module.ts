import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';

// Using Lazy loading
const appRoutes: Routes = [
  { path: "", component: HomeComponent },
  {
    path: "customers",
    loadChildren: "../app/customers/customers.module#CustomersModule"
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)],
    
  exports: [RouterModule]
})
export class AppRoutingModule { }
