import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have the 'Prince Kumar' title`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('Prince Kumar');
  });

  it('should render profile summary, metrics, and allow actions', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Prince Kumar');
    expect(compiled.querySelector('.role')?.textContent).toContain('Azure Infrastructure Administrator');
    expect(compiled.querySelectorAll('.metric-card').length).toBeGreaterThanOrEqual(3);
    expect(compiled.querySelectorAll('.action-btn').length).toBeGreaterThanOrEqual(1);
    expect(compiled.textContent).toContain('Cloud operations professional with expertise');
  });
});