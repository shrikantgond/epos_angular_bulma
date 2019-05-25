import { InventoryState, DefaultInventoryState } from '../states/inventory.state';
import { InventoryActions, InventoryActionsTypes } from '../actions/inventory.actions';
import * as app from '../../application.state';

export function InventoryReducer(state: InventoryState = DefaultInventoryState(), action: InventoryActions): InventoryState {    
    switch (action.type) {

        case InventoryActionsTypes.Load:
            return {
                ...state,
                ...app.LoadingApplicationState(),
            }
        case InventoryActionsTypes.LoadSuccess:        
            return {
                ...state,
                inventorys: action.payload.inventorys,
                ...app.LoadedApplicationState(),
            }
          case InventoryActionsTypes.LoadError:          
            return {
              ...state,
              ...app.ErrorApplicationState(action.error),
            };
        default:
            return state;
    }
}