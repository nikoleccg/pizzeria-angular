import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopularPizzasComponent } from './popular-pizzas.component';

describe('PopularPizzasComponent', () => {
  let component: PopularPizzasComponent;
  let fixture: ComponentFixture<PopularPizzasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PopularPizzasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PopularPizzasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
