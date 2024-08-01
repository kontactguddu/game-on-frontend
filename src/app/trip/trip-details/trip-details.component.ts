import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TitleTransformPipe } from 'src/app/pipe/title-transform.pipe';
import { CarouselModule } from 'ngx-bootstrap/carousel';


@Component({
  selector: 'app-trip-details',
  standalone: true,
  imports: [CommonModule, TitleTransformPipe, CarouselModule],
  templateUrl: './trip-details.component.html',
  styleUrl: './trip-details.component.css'
})
export class TripDetailsComponent implements OnInit {

  tripName: string | null = null;
  tripDetails: { [key: string]: { title: string, images: string[], description: string }[] } = {
    'Mayapur (WB)': [
      {
        title: 'ISKCON Temple',
        images: ['assets/trip/mayapur/1.jpg', 'assets/trip/mayapur/2.jpg', 'assets/trip/mayapur/3.jpg', 'assets/trip/mayapur/4.jpg', 'assets/trip/mayapur/5.jpg'],
        description: 'The ISKCON Temple in Mayapur is a significant pilgrimage site.'
      }
    ],
    'Puri (Orissa)': [
      {
        title: 'Jagannath Temple',
        images: ['path-to-image1.jpg', 'path-to-image2.jpg'],
        description: 'The Jagannath Temple is a famous Hindu temple dedicated to Jagannath.'
      },
      // Add more places within Puri
    ],
    'Ranchi (Jharkhand)': [
      {
        title: 'Dassam Falls',
        images: ['path-to-image1.jpg', 'path-to-image2.jpg'],
        description: 'Dassam Falls is a beautiful waterfall located near Ranchi.'
      },
      // Add more places within Ranchi
    ],
    'Banaras (UP)': [
      {
        title: 'Banaras Ghat',
        images: ['assets/trip/banaras/1.jpg', 'assets/trip/banaras/2.jpg', 'assets/trip/banaras/3.jpg', 'assets/trip/banaras/4.jpg', 'assets/trip/banaras/5.jpg', 'assets/trip/banaras/6.jpg', 'assets/trip/banaras/7.jpg', 'assets/trip/banaras/8.jpg'],
        description: 'Ghats in Varanasi are riverfront steps leading to the banks of the Ganges river. The city has 84 ghats'
      },
      // Add more places within Ranchi
    ],

    // Add details for other trips
  };

  selectedTripDetail: { title: string, images: string[], description: string }[] = [];

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.tripName = params.get('name');
      if (this.tripName && this.tripDetails[this.tripName]) {
        this.selectedTripDetail = this.tripDetails[this.tripName];
      }
    });
  }

  goBack(): void {
    this.router.navigate(['/blog']);
  }

}
