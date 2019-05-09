import {Action} from '@ngrx/store';
import { ITileModel } from 'src/app/models/Tile.model';

//#region  Order Tile Action Types
export enum TileActionsTypes {
    Load = '[Tile] LOAD',
    LoadSuccess = '[Tile] LOAD SUCCESS',
    LoadError = '[Tile] LOAD ERROR',
  }
  
  export class LoadTile implements Action {
    readonly type = TileActionsTypes.Load;
  }
  
  export class LoadTileSuccess implements Action {
    readonly type = TileActionsTypes.LoadSuccess;
    constructor(public payload: {tiles: ITileModel[]}) {      
    }
  }
  
  export class LoadTileError implements Action {
    readonly type = TileActionsTypes.LoadError;
    constructor(public error: any) {}
  }
  //#endregion

  export type TileActions = LoadTile | LoadTileSuccess | LoadTileError