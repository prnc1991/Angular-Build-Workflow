import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NgFor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Project Dashboard';
  summary = 'A focused view of delivery health, upcoming milestones, and team priorities.';
  metrics = [
    { label: 'Sprint progress', value: '78%', detail: 'Ahead of plan' },
    { label: 'Open risks', value: '3', detail: 'Two mitigations in progress' },
    { label: 'Release readiness', value: '92%', detail: 'Strong confidence' }
  ];
  priorities = [
    'Launch planning',
    'Customer onboarding flow',
    'Performance tuning'
  ];
}
