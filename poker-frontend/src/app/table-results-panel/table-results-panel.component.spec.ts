import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableResultsPanelComponent } from './table-results-panel.component';

describe('TableResultsPanelComponent', () => {
  let component: TableResultsPanelComponent;
  let fixture: ComponentFixture<TableResultsPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableResultsPanelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableResultsPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
