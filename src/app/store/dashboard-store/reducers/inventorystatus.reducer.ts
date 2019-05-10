import { InventoryStatusState, DefaultInventoryStatusState } from '../states/inventorystatus.state';
import { InventoryStatusActions, InventoryStatusActionsTypes } from '../actions/inventorystatus.actions';
import * as app from '../../application.state';

export function InventoryStatusReducer(state: InventoryStatusState = DefaultInventoryStatusState(), action: InventoryStatusActions): InventoryStatusState {
    //console.log('Action '+action.type)
    switch (action.type) {

        case InventoryStatusActionsTypes.Load:
            return {
                ...state,
                ...app.LoadingApplicationState(),
            }
        case InventoryStatusActionsTypes.LoadSuccess:        
            return {
                ...state,
                inventorystatus: action.payload.inventorystatus,
                ...app.LoadedApplicationState(),
            }
          case InventoryStatusActionsTypes.LoadError:          
            return {
              ...state,
              ...app.ErrorApplicationState(action.error),
            };
        default:
            return state;
    }
}