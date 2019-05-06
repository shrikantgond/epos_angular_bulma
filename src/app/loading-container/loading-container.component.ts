import {Component, Input } from '@angular/core';
import { ApplicationState } from '../store/application.state';

@Component({
  selector: 'loading-container',
  templateUrl: './loading-container.component.html',
  styleUrls: ['./loading-container.component.scss']
})
export class LoadingContainerComponent {
  @Input() loadable: ApplicationState;
}
