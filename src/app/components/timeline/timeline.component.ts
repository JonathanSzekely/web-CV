import { Component } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

import { Project } from "../../components/timeline/project.model";
import { projects } from "../../constants/projects";

@Component({
  selector: 'app-timeline',
  imports: [CommonModule, DatePipe],
  templateUrl: './timeline.component.html',
  styleUrl: './timeline.component.scss'
})

export class TimelineComponent {
  public projects: Project[] = projects;
}
