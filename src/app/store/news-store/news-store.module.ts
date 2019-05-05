import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { newsReducer } from 'src/app/store/news-store/news';
import { NewsEffects } from 'src/app/store/news-store/news.effects';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature('news', {news:newsReducer}),
    EffectsModule.forFeature([NewsEffects])
  ],
  providers: [NewsEffects] 
})
export class NewsStoreModule { }
