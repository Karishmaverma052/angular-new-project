import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-new',
  standalone: true,
  imports: [CommonModule,FormsModule,RouterOutlet],
  templateUrl: './new.component.html',
  styleUrl: './new.component.css'
})
export class NewComponent {
  user: any = {
    name: '',
    email: '',
    password: '',
  };
  onSubmit(){
    console.log(this.user);
  }

}
