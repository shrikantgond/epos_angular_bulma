import {Action} from '@ngrx/store';
import { ITopSellingModel } from 'src/app/models/topselling.model';

//#region  Order TopSelling Action Types
export enum TopSellingActionsTypes {
    Load = '[TopSelling] LOAD',
    LoadSuccess = '[TopSelling] LOAD SUCCESS',
    LoadError = '[TopSelling] LOAD ERROR',
  }
  
  export class LoadTopSelling implements Action {
    readonly type = TopSellingActionsTypes.Load;
  }
  
  export class LoadTopSellingSuccess implements Action {
    readonly type = TopSellingActionsTypes.LoadSuccess;
    constructor(public payload: {topselling: ITopSellingModel[]}) {      
    }
  }
  
  export class LoadTopSellingError implements Action {
    readonly type = TopSellingActionsTypes.LoadError;
    constructor(public error: any) {}
  }
  //#endregion

  export type TopSellingActions = LoadTopSelling | LoadTopSellingSuccess | LoadTopSellingError