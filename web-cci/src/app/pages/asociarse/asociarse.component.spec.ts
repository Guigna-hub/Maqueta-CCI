import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsociarseComponent } from './asociarse.component';

describe('AsociarseComponent', () => {
  let component: AsociarseComponent;
  let fixture: ComponentFixture<AsociarseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AsociarseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AsociarseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
