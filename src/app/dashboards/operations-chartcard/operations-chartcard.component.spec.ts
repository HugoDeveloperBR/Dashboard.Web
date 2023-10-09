import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperationsChartcardComponent } from './operations-chartcard.component';

describe('OperationsChartcardComponent', () => {
  let component: OperationsChartcardComponent;
  let fixture: ComponentFixture<OperationsChartcardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OperationsChartcardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OperationsChartcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
