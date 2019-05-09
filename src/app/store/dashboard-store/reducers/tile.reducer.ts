import { TileState, DefaultTileState } from '../states/Tile.state';
import { TileActions, TileActionsTypes } from '../actions/tile.actions';
import * as app from '../../application.state';

export function TileReducer(state: TileState = DefaultTileState(), action: TileActions): TileState {
    //console.log('Action '+action.type)
    switch (action.type) {

        case TileActionsTypes.Load:
            return {
                ...state,
                ...app.LoadingApplicationState(),
            }
        case TileActionsTypes.LoadSuccess:        
            return {
                ...state,
                tiles: action.payload.tiles,
                ...app.LoadedApplicationState(),
            }
          case TileActionsTypes.LoadError:          
            return {
              ...state,
              ...app.ErrorApplicationState(action.error),
            };
        default:
            return state;
    }
}