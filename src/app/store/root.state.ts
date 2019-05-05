import { ActionReducerMap } from '@ngrx/store';
import * as news from './news-store/news'
import * as alert from './alert-store/alert'
import { Loadable } from './loadable/Loadable';

export interface ApplicationState extends Loadable {
  news: news.News;
  alert: alert.Alert;
  //todos: todos.TodosState;  
}

export function defaultReducer<T>(state: T) { return state; }
export const initialReducerMap = {
  news: news.newsReducer,
  alert:alert.AlertReducer,
  //todos: defaultReducer
} as ActionReducerMap<ApplicationState>;

// export function getInitialState() {
//   return {
//     news: news.createDefaultNews(),
//     alert: alert.createDefaultAlert(),
//     //todos: todos.initialState
//   } as ApplicationState;
// }