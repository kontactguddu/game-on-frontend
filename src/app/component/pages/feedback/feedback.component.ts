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
  showThankYou = false;
  

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
      phone: ['', [Validators.pattern('^[0-9]{10}$')]],
      email: ['', [Validators.email]]
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
    
      this.firestore.collection('feedbacks').add(feedbackData)
        .then(() => {
          console.log('Feedback submitted successfully!');
          this.showThankYou = true;  // Show Thank You component
          setTimeout(() => {
            this.showThankYou = false; // Hide Thank You component
            this.feedbackForm.reset();
            this.router.navigate(['/']); // Navigate to the home page
          }, 2500); // 2.5 seconds delay
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
