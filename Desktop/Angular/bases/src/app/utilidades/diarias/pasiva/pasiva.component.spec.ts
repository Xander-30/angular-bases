import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasivaComponent } from './pasiva.component';

describe('PasivaComponent', () => {
  let component: PasivaComponent;
  let fixture: ComponentFixture<PasivaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PasivaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PasivaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
