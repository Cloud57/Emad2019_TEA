import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabTask1Page } from './tab-task1.page';

describe('TabTask1Page', () => {
  let component: TabTask1Page;
  let fixture: ComponentFixture<TabTask1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabTask1Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabTask1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
