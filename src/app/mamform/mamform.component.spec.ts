import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MamformComponent } from './mamform.component';

describe('MamformComponent', () => {
  let component: MamformComponent;
  let fixture: ComponentFixture<MamformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MamformComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MamformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
