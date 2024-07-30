import { Component } from '@angular/core';
import { RunningManComponent } from 'src/app/funzone/running-man/running-man.component';
import { SpeedTestComponent } from 'src/app/funzone/speed-test/speed-test.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-fun-zone',
  standalone: true,
  imports: [RunningManComponent, SpeedTestComponent, CommonModule],
  templateUrl: './fun-zone.component.html',
  styleUrl: './fun-zone.component.css'
})
export class FunZoneComponent {

  currentComponent: string | null = null;

  loadComponent(componentName: string) {
    this.currentComponent = componentName;
  }

}
