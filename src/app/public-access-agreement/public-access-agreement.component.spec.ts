import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicAccessAgreementComponent } from './public-access-agreement.component';

describe('PublicAccessAgreementComponent', () => {
  let component: PublicAccessAgreementComponent;
  let fixture: ComponentFixture<PublicAccessAgreementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PublicAccessAgreementComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PublicAccessAgreementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
