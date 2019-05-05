import {Component, Input } from '@angular/core';
import { Loadable } from '../store/loadable/loadable';

@Component({
  selector: 'loading-container',
  templateUrl: './loading-container.component.html',
  styleUrls: ['./loading-container.component.scss']
})
export class LoadingContainerComponent {
  @Input() loadable: Loadable;
}
