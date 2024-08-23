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
    'Kolkata (WB)': [
      {
        title: 'Durga Puja & Science City',
        images: ['assets/trip/kolkata/1.jpg', 'assets/trip/kolkata/2.jpg', 
          'assets/trip/kolkata/3.jpg', 'assets/trip/kolkata/4.jpg',
           'assets/trip/kolkata/5.jpg', 'assets/trip/kolkata/6.jpg',
           'assets/trip/kolkata/7.jpg', 'assets/trip/kolkata/8.jpg', 'assets/trip/kolkata/9.jpg'],

        description: `
  Last October, I (Guddu) and a few friends visited Kolkata to experience the grandeur of Durga Puja. 
  The city was alive with lights, music, and vibrant decorations. Every pandal we visited was a unique work of art, 
  showcasing incredible creativity. The devotion and energy during the evening aarti were unforgettable, making us feel 
  deeply connected to the festive spirit.

  After soaking in the cultural splendor, we headed to Science City, eager to explore Kolkata’s scientific side. 
  The Space Theatre’s 3D show was a highlight, taking us on a breathtaking journey through the universe. The Evolution Park, 
  with its life-sized models of dinosaurs and other creatures, was both educational and fascinating.

  The Dynamotion Hall offered hands-on experiments with sound, light, and optical illusions, making learning fun and interactive. 
  We ended our visit with a ride on the Ropeway, which gave us a stunning view of the Science City complex and the city beyond.

  Our trip to Kolkata was a perfect mix of tradition and modernity, leaving us with memories of vibrant celebrations and inspiring discoveries.
`
      },
      // Add more places within Puri
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
