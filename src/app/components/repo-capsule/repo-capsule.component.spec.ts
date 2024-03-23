import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepoCapsuleComponent } from './repo-capsule.component';

describe('RepoCapsuleComponent', () => {
  let component: RepoCapsuleComponent;
  let fixture: ComponentFixture<RepoCapsuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RepoCapsuleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RepoCapsuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
