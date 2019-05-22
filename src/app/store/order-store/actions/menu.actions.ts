import {Action} from '@ngrx/store';
import { IMenuModel } from 'src/app/models/menu.model';

//#region  Order Menu Action Types
export enum MenuActionsTypes {
    Load = '[Menu] LOAD',
    LoadSuccess = '[Menu] LOAD SUCCESS',
    LoadError = '[Menu] LOAD ERROR',
  }
  
  export class LoadMenu implements Action {
    readonly type = MenuActionsTypes.Load;
  }
  
  export class LoadMenuSuccess implements Action {
    readonly type = MenuActionsTypes.LoadSuccess;
    constructor(public payload: {menus: IMenuModel[]}) {      
    }
  }
  
  export class LoadMenuError implements Action {
    readonly type = MenuActionsTypes.LoadError;
    constructor(public error: any) {}
  }
  //#endregion

  export type MenuActions = LoadMenu | LoadMenuSuccess | LoadMenuError