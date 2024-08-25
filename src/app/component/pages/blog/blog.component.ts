import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent {

  friendTrips: string[] = [
    'Mayapur (WB)', 'Puri (Orissa)', 'Ranchi (Jharkhand)', 'Jamshedpur (Jharkhand)', 
     'Simdega (Jharkhand)', 'Bangalore (Karnataka)', 'Mysore (Karnataka)',
     'Kolkata (WB)', 'Deoghar (Jharkhand)'
  ];

  cousinTrips: string[] = [
    'Barabar (Bihar)', 'Banaras (UP)', 'Agra (UP)', 'Gurugram (Haryana)', 'Rajgir (Bihar)'
  ];

  constructor(private router: Router) {}

  navigateToTrip(trip: string): void {
    this.router.navigate(['/trip', trip]);
  }

}
