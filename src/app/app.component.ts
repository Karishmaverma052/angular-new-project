import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EmployeelistComponent } from './Components/employeelist/employeelist.component';
import { AddEmployeeComponent } from './Components/add-employee/add-employee.component';
import { DataBindingComponent } from './Components/data-binding/data-binding.component';
import { ProfileFormComponent } from "./Components/profile-form/profile-form.component";
import { FormsComponent } from "./forms/forms.component";
import { NewComponent } from './new/new.component';
import { DatabidingComponent } from "./Components/databiding/databiding.component";
import { IndexComponent } from './post/index/index.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { DataDisplayComponent } from './data-display/data-display.component';







@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    IndexComponent,
    EmployeelistComponent, 
    AddEmployeeComponent,
     NewComponent, 
     DataBindingComponent,
      ProfileFormComponent,
     FormsComponent,
      DatabidingComponent,
      CommonModule,
      FormsModule,
      ReactiveFormsModule,
      DataDisplayComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'tutorial';
  data: any =[];
  http= inject(HttpClient)
  constructor(){
    this.loadUser();
  }
  loadUser(){
    this.http.get('https://jsonplaceholder.typicode.com/todos/1').subscribe((data:any) =>{
      this.data = data;
    })
  }
}
