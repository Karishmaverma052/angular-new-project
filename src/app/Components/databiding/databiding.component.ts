import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-databiding',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './databiding.component.html',
  styleUrl: './databiding.component.css'
})
export class DatabidingComponent {
  //string number boolean date
  constructor(){


  }
  chengeCoursName(){
    this.coursName = "Angular 14"

  
  }
 showAlert(message: string){
    alert(message);
    
  }
  myClassName:string = "bg-primary";
  stateName:string = ""
  coursName:string="Angular Developer";
  inputType = "checkbox";
  rollNo: number = 123;
  isIndia: boolean = false;
  currentDate: Date = new Date();
  firstName=signal("kamo")
 
}
