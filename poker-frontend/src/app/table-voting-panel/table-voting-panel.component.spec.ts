import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableVotingPanelComponent } from './table-voting-panel.component';

describe('TableVotingPanelComponent', () => {
  let component: TableVotingPanelComponent;
  let fixture: ComponentFixture<TableVotingPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableVotingPanelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableVotingPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
