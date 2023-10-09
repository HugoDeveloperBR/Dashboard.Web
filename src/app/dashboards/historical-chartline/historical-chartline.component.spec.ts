import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoricalChartlineComponent } from './historical-chartline.component';

describe('HistoricalChartlineComponent', () => {
  let component: HistoricalChartlineComponent;
  let fixture: ComponentFixture<HistoricalChartlineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistoricalChartlineComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HistoricalChartlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
