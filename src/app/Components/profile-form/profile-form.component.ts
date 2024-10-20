import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';  // Import CommonModule for directives like *ngIf

@Component({
  selector: 'app-profile-form',
  standalone: true,  // Mark as a standalone component
  imports: [ReactiveFormsModule, CommonModule],  // Add CommonModule and ReactiveFormsModule here
  templateUrl: './profile-form.component.html',
  styleUrls: ['./profile-form.component.css']
})
export class ProfileFormComponent {
  profileForm = new FormGroup({
    firstName: new FormControl('', [Validators.required, Validators.minLength(3)]),
    lastName: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email])
  });

  onSubmit() {
    if (this.profileForm.valid) {
      console.log('Form submitted successfully:', this.profileForm.value);
    } else {
      console.log('Form is invalid');
    }
  }
}
