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
        images: ['assets/trip/mayapur/1.jpg', 'assets/trip/mayapur/2.jpg', 'assets/trip/mayapur/3.jpg', 'assets/trip/mayapur/4.jpg', 'assets/trip/mayapur/5.jpg', 'assets/trip/mayapur/6.jpg', 'assets/trip/mayapur/7.jpg'],
        description: `
In September 2021, after the long months of lockdown, I embarked on my first college trip to the serene and spiritual town of Mayapur. Organized by my college club, Voice, this trip was a unique opportunity to explore a place I've always been curious about. Accompanied by seniors, some unknown friends, and Prabhu Ji, we set out on this journey, which promised to be an enriching experience.

Mayapur, known as the birthplace of Lord Chaitanya, the founder of the Gaudiya Vaishnavism tradition, is a place filled with spiritual energy and devotion. Our 2-3 days there were a perfect blend of devotion, learning, and camaraderie. We participated in vibrant kirtans, where the chants and music filled the air with a sense of peace and joy. The Radha Rani darshan was a highlight, offering us a glimpse of divine beauty and serenity.

One of the most memorable parts of the trip was the multiple sessions with the devotees. These interactions provided deep insights into the philosophy of devotion and the teachings of Lord Chaitanya. Chanting sessions were equally uplifting, as we immersed ourselves in the holy names, feeling a deep connection with the divine.

This trip to Mayapur was more than just a getaway; it was a journey within, a chance to reconnect with spirituality and form bonds with like-minded individuals. The experience left an indelible mark on my heart, reminding me of the peace and joy that comes from devotion and community.
        `
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
        description: `
In June 2022, I embarked on my first interstate trip with my cousins to the ancient and sacred city of Varanasi. This 3-day adventure was filled with unforgettable experiences that left a lasting impression on all of us.

Varanasi, often referred to as the spiritual capital of India, has a unique vibe that resonates with the essence of life and death. The city's energy is palpable, and we felt it the moment we arrived. One of the first things we did was take a holy dip in the Ganges River, an act that holds great spiritual significance. The cool waters of the Ganga seemed to wash away not just physical impurities, but also the stresses of daily life.

Visiting the newly developed Vishwanath Corridor was another highlight of our trip. The grandeur of the Kashi Vishwanath Temple, nestled within the corridor, left us in awe. The corridor, with its wide pathways and beautifully crafted architecture, provided us with a serene space to connect with the divine.

Evenings in Varanasi are magical, and watching the Ganga Aarti was a mesmerizing experience. The synchrony of chants, the glow of lamps, and the devotion of the crowd created an atmosphere of profound spirituality. We also spent some peaceful time at the Ganga Ghat at night, soaking in the calmness and reflecting on the day's experiences.

This trip to Varanasi with my cousins was more than just a vacation; it was a spiritual journey that deepened our bond and left us with cherished memories of the city’s timeless charm.
        `
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
