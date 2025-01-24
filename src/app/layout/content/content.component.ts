import { Component } from '@angular/core';
import { TimelineComponent } from '../../components/timeline/timeline.component';

@Component({
  selector: 'app-content',
  imports: [TimelineComponent],
  templateUrl: './content.component.html',
  styleUrl: './content.component.scss'
})
export class ContentComponent {

}
