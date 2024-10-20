import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  standalone: true,
  imports: [
    FormsModule],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css'
})
export class DataBindingComponent {

  //tring,number,bolean,data
  courseName: string = "  Angular 17 ";
  stateName: string = "Lucknow";
  inputType = "radio"
  myClassName:string = "bg-primary"
  rollNo: number =24354;
  idIndiana: boolean = false;
  currentDate: Date = new Date;
  constructor(){
   

  }
  chenge(){
     this.courseName ="C++ dsa"
    
  }
  chengeCoursesName(){
    this.courseName = "Reacte js"
   
    

  }
  showAlert(message:string){
    alert(message)
  }


}
