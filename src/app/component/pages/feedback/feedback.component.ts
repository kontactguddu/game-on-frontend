import { Component,OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';

@Component({
  selector: 'app-feedback',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './feedback.component.html',
  styleUrl: './feedback.component.css'
})
export class FeedbackComponent implements OnInit{

  feedbackForm: any;
  

  constructor(
    private fb: FormBuilder,
    private firestore: AngularFirestore,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.feedbackForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      name: ['', Validators.required],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      email: ['', [Validators.required, Validators.email]]
    });
  }

  onSubmit(): void {
    console.log('Form submission triggered');
  if (this.feedbackForm.valid) {
    console.log('Form is valid, preparing to submit');
    
    const feedbackData = {
      ...this.feedbackForm.value,
      timestamp: new Date()
    };
    
    console.log('Submitting feedback with data:', feedbackData);
    
    this.firestore.collection('feedbacks').add( {
      title: this.feedbackForm.value.title,
      description: this.feedbackForm.value.description,
      name: this.feedbackForm.value.name,
      phone: this.feedbackForm.value.phone,
      email: this.feedbackForm.value.email
    })
      .then(() => {
        console.log('Feedback submitted successfully!');
        this.feedbackForm.reset();
        this.router.navigate(['/thank-you']); // Optional navigation
      })
      .catch(error => {
        console.error('Error submitting feedback: ', error);
      });
  } else {
    console.log('Form is invalid:', this.feedbackForm.errors);
    this.feedbackForm.markAllAsTouched(); // To trigger validation messages if the form is invalid
  }
  }

  onCancel(): void {
    this.feedbackForm.reset();
    this.router.navigate(['/']); // Navigate to the home page
  }

}
