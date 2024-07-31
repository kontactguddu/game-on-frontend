import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-trip-details',
  standalone: true,
  imports: [],
  templateUrl: './trip-details.component.html',
  styleUrl: './trip-details.component.css'
})
export class TripDetailsComponent implements OnInit {

  tripName: string | null = null;
  

  tripDetails: { [key: string]: { description: string, image: string } } = {
    'Mayapur': { description: 'Mayapur is a city located in the Nadia district of West Bengal, India.', image: 'path-to-mayapur-image.jpg' },
    'Puri': { description: 'Puri is a coastal city and a municipality in the state of Odisha in eastern India.', image: 'path-to-puri-image.jpg' },
    'Ranchi (Waterfall)': { description: 'Ranchi is known for its numerous waterfalls, including Dassam Falls and Hundru Falls.', image: 'path-to-ranchi-image.jpg' },
    'Dalma Wildlife': { description: 'Dalma Wildlife Sanctuary is located in the state of Jharkhand, India.', image: 'path-to-dalma-image.jpg' },
    'Dimna Lake': { description: 'Dimna Lake is an artificial reservoir located near Jamshedpur in Jharkhand, India.', image: 'path-to-dimna-image.jpg' },
    'Simdega Visit': { description: 'Simdega is a town in the state of Jharkhand, known for its natural beauty.', image: 'path-to-simdega-image.jpg' },
    'Jamshedpur': { description: 'Jamshedpur is a large city in the state of Jharkhand, founded by the Tata Group.', image: 'path-to-jamshedpur-image.jpg' },
    'Bangalore': { description: 'Bangalore is the capital of the Indian state of Karnataka, known for its IT industry.', image: 'path-to-bangalore-image.jpg' },
    'Mysore': { description: 'Mysore is a city in the southern part of Karnataka, India, known for its palaces and gardens.', image: 'path-to-mysore-image.jpg' },
    'Banaras': { description: 'Banaras, also known as Varanasi, is a city on the banks of the Ganges in Uttar Pradesh, India.', image: 'path-to-banaras-image.jpg' },
    'Barabar Mountains': { description: 'The Barabar Mountains are known for the Barabar Caves, the oldest rock-cut caves in India.', image: 'path-to-barabar-image.jpg' },
    'Rajgir & Both Gaya': { description: 'Rajgir and Bodh Gaya are significant Buddhist pilgrimage sites located in Bihar, India.', image: 'path-to-rajgir-image.jpg' }
  };

  description: string = '';
  image: string = '';

  constructor(private route: ActivatedRoute,
              private router: Router
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.tripName = params.get('name');
      if (this.tripName && this.tripDetails[this.tripName]) {
        this.description = this.tripDetails[this.tripName].description;
        this.image = this.tripDetails[this.tripName].image;
      }
    });
  }

  gotoBlog(): void {
    // Navigate to the blog page
    this.router.navigate(['/blog']);
  }

}
