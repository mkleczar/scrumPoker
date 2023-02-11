import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableJoinComponent } from './table-join.component';

describe('TableJoinComponent', () => {
  let component: TableJoinComponent;
  let fixture: ComponentFixture<TableJoinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableJoinComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableJoinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
