import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DeparmentComponent } from './deparment/deparment.component';
import { DepartmentDetailsComponent } from './department-details/department-details.component';

const routes: Routes = [
  {path: '', redirectTo: '/departments', pathMatch: 'full' },
  {path: 'departments', component: DeparmentComponent},
  {path: 'departments/:id', component: DepartmentDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
