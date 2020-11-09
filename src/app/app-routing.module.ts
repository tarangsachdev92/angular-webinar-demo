import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AGDemoListComponent } from './ag-demo-list/ag-demo-list.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { StudentCreateComponent } from './student-create/student-create.component';
import { StudentEditComponent } from './student-edit/student-edit.component';
import { StudentsListComponent } from './students-list/students-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'student-list', component: StudentsListComponent },
  { path: 'ag-grid', component: AGDemoListComponent },
  { path: 'create-student', component: StudentCreateComponent },
  { path: 'edit-student/:id', component: StudentEditComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
