import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';
import {Item} from './item.model'

// import a library for Formulas
import {FormsModule} from '@angular/forms';

describe('AppComponent', () => {
  let component: AppComponent;
    let fixture: ComponentFixture<AppComponent>;
    let item = new Item('item', 1, 1);
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
});

it('create an instance', () => {
  const appCart = new AppComponent();
  expect(appCart).toBeTruthy();
});
it('correct basic invoice', () => {
  const appCart = new AppComponent();
  expect(appCart.total())
  .toEqual(item.getPrice());
});

it('add a product', () => {
  const appCart = new AppComponent();
  const item2 = new Item('item2', 1, 10);
  appCart.addItem();
  const items = appCart.items();
  items[1].description = item2.getDescription();
  items[1].qty = item2.getQty();
  items[1].cost = item2.getPrice();
  expect(appCart.total())
  .toEqual(item.getPrice() + item2.getPrice());
  appCart.addItem();
  expect(appCart.items().length)
  .toEqual(3);
});
it('delete a product', () => {
  const appCart = new AppComponent();
  var appCartSize = 1;
  appCart.addItem();
  appCart += 1;
  appCart.addItem();
  appCart += 1;
  expect(appCart.items().length)
  .toEqual(appCart);
  appCart.deleteItem(1);
  appCart -= 1;
  expect(appCart.items().length)
  .toEqual(appCart);
  expect(appCart.total())
  .toEqual(item.getPrice());
});

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'frontend'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('frontend');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome!');
  });

  
});
