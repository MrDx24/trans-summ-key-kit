import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkVidInputComponent } from './link-vid-input.component';

describe('LinkVidInputComponent', () => {
  let component: LinkVidInputComponent;
  let fixture: ComponentFixture<LinkVidInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LinkVidInputComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LinkVidInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
