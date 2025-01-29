import { Component } from '@angular/core';
import { TimelineComponent } from '../../components/timeline/timeline.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-content',
  // imports: [TimelineComponent],
  imports: [RouterModule],
  templateUrl: './content.component.html',
  styleUrl: './content.component.scss'
})
export class ContentComponent {

}
