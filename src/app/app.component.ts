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
  title = 'Prince Kumar';
  role = 'Azure Infrastructure Administrator';
  summary = 'Cloud operations professional with expertise in Azure, infrastructure automation, incident response, and secure platform support.';
  profileImage = 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=400&q=80';
  metrics = [
    { label: 'Years of Experience', value: '5+', detail: 'Infrastructure delivery' },
    { label: 'Cloud Focus', value: 'Azure', detail: 'Hybrid and modern workloads' },
    { label: 'Availability', value: '99.9%', detail: 'Service reliability' }
  ];
  priorities = [
    'Azure VM and network administration',
    'Automation with scripts and IaC',
    'Security, monitoring, and incident handling'
  ];
  highlights = [
    'Designed resilient Azure infrastructure solutions',
    'Improved deployment reliability and operational visibility',
    'Collaborated with teams on secure, scalable environments'
  ];
}
