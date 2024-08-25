import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

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
  tripDetails: { [key: string]: { title: string, images: string[], description: string }[] } = {};
  selectedTripDetail: { title: string, images: string[], description: string }[] = [];

  constructor(private route: ActivatedRoute, private router: Router, private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<{ [key: string]: { title: string, images: string[], description: string }[] }>('/assets/trip/trips.json')
    .subscribe(data => {
      this.tripDetails = data;
      this.route.paramMap.subscribe(params => {
        this.tripName = params.get('name');
        if (this.tripName && this.tripDetails[this.tripName]) {
          this.selectedTripDetail = this.tripDetails[this.tripName];
        }
      });
    });
  }

  goBack(): void {
    this.router.navigate(['/blog']);
  }

}
