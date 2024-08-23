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
        images: ['assets/trip/dassamfalls/1.jpg', 'assets/trip/dassamfalls/2.jpg', 'assets/trip/dassamfalls/3.jpg', 'assets/trip/dassamfalls/4.jpg', 'assets/trip/dassamfalls/5.jpg', 'assets/trip/dassamfalls/6.jpg'],
        description: `
My first trip 150 km away from college was an exciting adventure to Dassam Falls in Ranchi. The journey itself was just as memorable as the destination. We set out early in my friend's car, with Vinay behind the wheel, guiding us smoothly along the highway. The thrill of the open road, combined with continuous music playing throughout the trip, set the perfect mood for our adventure.

Dassam Falls, located near Ranchi, is one of the most popular and picturesque waterfalls in Jharkhand. The drive to the falls was filled with anticipation, and the sight of the cascading water as we arrived did not disappoint. We spent three hours at the falls, soaking in the natural beauty and enjoying the peaceful ambiance. The sound of the water crashing down the rocks was both calming and invigorating.

Although our time at Dassam Falls was limited, we made the most of it by exploring the surrounding area and capturing the stunning views in our minds and cameras. The cool mist from the falls provided a refreshing break from the day's heat.

On our way back to Jamshedpur, we stopped at a roadside dhaba for lunch. The simplicity and flavor of the dhaba food were a highlight of the trip, adding a touch of authenticity to our journey. After a satisfying meal, we continued our drive back, feeling content and rejuvenated.

This trip to Dassam Falls was a perfect blend of adventure, nature, and camaraderie, leaving us with cherished memories of a day well spent.`
      },
      {
        title: 'Chandil Dam',
        images: ['assets/trip/dassamfalls/7.jpg', 'assets/trip/dassamfalls/8.jpg', 'assets/trip/dassamfalls/9.jpg', 'assets/trip/dassamfalls/10.jpg', 'assets/trip/dassamfalls/11.jpg'],
        description: `
On our way back from Dassam Falls to Jamshedpur, we made an impromptu stop at Chandil Dam, a decision that added a serene touch to our already memorable day. Nestled amidst picturesque hills, Chandil Dam is a tranquil spot that offers breathtaking views of the surrounding landscape.

As we approached the dam, the vast expanse of water reflecting the evening sky greeted us, creating a peaceful atmosphere. The stillness of the water, coupled with the gentle breeze, provided a perfect contrast to the excitement of Dassam Falls. We spent some time walking along the dam, taking in the natural beauty and enjoying the calmness that enveloped the area.

This unexpected detour to Chandil Dam was a refreshing pause in our journey, allowing us to connect with nature once more before heading back to the hustle and bustle of college life. It was a fitting end to a day filled with adventure and exploration.
        `
      }
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

    'Barabar (Bihar)': [ 
      {
        'title': 'Barabar Caves',
        'images': ['assets/trip/barabar/1.jpg', 'assets/trip/barabar/2.jpg', 'assets/trip/barabar/3.jpg', 'assets/trip/barabar/4.jpg', 'assets/trip/barabar/5.jpg', 'assets/trip/barabar/6.jpg', 'assets/trip/barabar/7.jpg'],
        'description': `
In February 2021, shortly after starting college, I had the chance to embark on my first trip with my cousins without any family members. Our destination was the Barabar Mountains, located about 20 km away from Jehanabad. Known for their ancient caves and scenic beauty, the mountains promised an adventure we were all excited about.

We began our day early, packing some fruits, chips, and cold drinks to fuel our trek. The morning air was crisp as we set off on our trek up the Barabar Mountains. The climb, though challenging, was exhilarating, and we completed it in about two hours. Along the way, we were treated to stunning views of the surrounding landscape, which only grew more breathtaking as we ascended.

At the summit, we were rewarded with a panoramic view of the city below. The sight was awe-inspiring, and we felt a sense of accomplishment as we stood at the top, taking it all in. After exploring the Barabar Caves, known for their ancient rock-cut architecture and historical significance, we spent the rest of the day relaxing and enjoying each other’s company.

One of the highlights of our day was dancing on the mountain top, a spontaneous moment of joy that perfectly captured the spirit of our trip. As the day drew to a close, we reflected on the adventure we had shared, knowing that this experience would be a cherished memory for years to come.

This trip to Barabar Mountains was not just an adventure but also a bonding experience that brought us closer together, creating memories that will last a lifetime.
        `
      }
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
