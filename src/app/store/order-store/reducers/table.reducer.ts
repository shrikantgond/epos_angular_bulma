import { TableState, DefaultTableState } from '../states/table.state';
import { TableActions, TableActionsTypes } from '../actions/table.actions';
import * as app from '../../application.state';

export function TableReducer(state: TableState = DefaultTableState(), action: TableActions): TableState {
    //console.log('Action '+action.type)
    switch (action.type) {

        case TableActionsTypes.Load:
            return {
                ...state,
                ...app.LoadingApplicationState(),
            }
        case TableActionsTypes.LoadSuccess:        
            return {
                ...state,
                tables: action.payload.tables,
                ...app.LoadedApplicationState(),
            }
          case TableActionsTypes.LoadError:          
            return {
              ...state,
              ...app.ErrorApplicationState(action.error),
            };
        default:
            return state;
    }
}