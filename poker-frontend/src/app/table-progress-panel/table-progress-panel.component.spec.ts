import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableProgressPanelComponent } from './table-progress-panel.component';

describe('TableProgressPanelComponent', () => {
  let component: TableProgressPanelComponent;
  let fixture: ComponentFixture<TableProgressPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableProgressPanelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableProgressPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
