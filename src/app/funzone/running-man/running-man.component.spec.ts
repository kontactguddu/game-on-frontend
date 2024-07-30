import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RunningManComponent } from './running-man.component';

describe('RunningManComponent', () => {
  let component: RunningManComponent;
  let fixture: ComponentFixture<RunningManComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RunningManComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RunningManComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
