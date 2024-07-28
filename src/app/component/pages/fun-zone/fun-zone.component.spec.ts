import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FunZoneComponent } from './fun-zone.component';

describe('FunZoneComponent', () => {
  let component: FunZoneComponent;
  let fixture: ComponentFixture<FunZoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FunZoneComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FunZoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
