import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { NewsStoreModule } from './news-store/news-store.module';
import { AlertStoreModule } from './alert-store/alert-store.module';
import { DashboardStoreModule } from './dashboard-store/dashboard-store.module';

@NgModule({
  imports: [
    CommonModule,
    NewsStoreModule,
    AlertStoreModule,
    DashboardStoreModule,
    StoreModule.forRoot({}),//(initialReducerMap, { initialState: getInitialState }),
    EffectsModule.forRoot([]),//.forRoot([NewsEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
    }),
  ],
  declarations: []
})
export class RootStoreModule {}