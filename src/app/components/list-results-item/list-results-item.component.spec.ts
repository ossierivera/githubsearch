import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListResultsItemComponent } from './list-results-item.component';

describe('ListResultsItemComponent', () => {
  let component: ListResultsItemComponent;
  let fixture: ComponentFixture<ListResultsItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListResultsItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListResultsItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
