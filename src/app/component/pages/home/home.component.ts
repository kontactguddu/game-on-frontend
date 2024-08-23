import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  year: number = new Date().getFullYear();

  carLImages: string[] = [
    'assets/carL/carL.png',
    'assets/carL/carL2.png',
    'assets/carL/carL3.png',
    'assets/carL/carL4.png'
  ];
  
  carRImages: string[] = [
    'assets/carR/carR.png',
    'assets/carR/carR2.png',
    'assets/carR/carR3.png',
    'assets/carR/carR4.png'
  ];
  
  carLImage: string = this.carLImages[0];
  carRImage: string = this.carRImages[0];
  
  private carLIndex: number = 0;
  private carRIndex: number = 0;

  ngOnInit(): void {
    setInterval(() => this.updateCarLImage(), 10000);
    setInterval(() => this.updateCarRImage(), 7500);
  }

  private updateCarLImage(): void {
    this.carLIndex = (this.carLIndex + 1) % this.carLImages.length;
    this.carLImage = this.carLImages[this.carLIndex];
  }

  private updateCarRImage(): void {
    this.carRIndex = (this.carRIndex + 1) % this.carRImages.length;
    this.carRImage = this.carRImages[this.carRIndex];
  }

}
