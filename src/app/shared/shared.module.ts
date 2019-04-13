import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faAsterisk,
  faBars,
  faUserCircle,
  faPowerOff,
  faCog,
  faPlayCircle,
  faRocket,
  faPlus,
  faEdit,
  faTrash,
  faTimes,
  faCaretUp,
  faCaretDown,
  faExclamationTriangle,
  faFilter,
  faTasks,
  faCheck,
  faSquare,
  faLanguage,
  faPaintBrush,
  faLightbulb,
  faWindowMaximize,
  faStream,
  faBook,
  faList,
  faChartBar,
  faUser,
  faAddressBook,
  faFile,
  faSignOutAlt,
  faFileInvoice,
  faCalendarAlt,
  faMobileAlt,
  faMailBulk,
  faInbox,
  faBox,
  faToolbox,
  faSearch,
  faAngleLeft,
  faAngleRight
} from '@fortawesome/free-solid-svg-icons';
import { RouterModule } from '@angular/router';

library.add(
  faAsterisk,
  faBars,
  faUserCircle,
  faPowerOff,
  faCog,
  faRocket,
  faPlayCircle,
  faPlus,
  faEdit,
  faTrash,
  faTimes,
  faCaretUp,
  faCaretDown,
  faExclamationTriangle,
  faFilter,
  faTasks,
  faCheck,
  faSquare,
  faLanguage,
  faPaintBrush,
  faLightbulb,
  faWindowMaximize,
  faStream,
  faBook,
  faList,
  faChartBar,
  faUser,
  faAddressBook,
  faFile,
  faSignOutAlt,
  faFileInvoice,
  faCalendarAlt,
  faMobileAlt,
  faToolbox,
  faSearch,
  faAngleLeft,
  faAngleRight
);

import { HighchartsChartModule } from 'highcharts-angular';

@NgModule({
  imports: [
    CommonModule,
    FontAwesomeModule,
    HighchartsChartModule

  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,

    FontAwesomeModule,
    HighchartsChartModule
  ],
  declarations: []
})
export class SharedModule { }
