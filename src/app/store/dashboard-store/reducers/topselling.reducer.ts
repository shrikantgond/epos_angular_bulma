import { TopSellingState, DefaultTopSellingState } from '../states/topselling.state';
import { TopSellingActions, TopSellingActionsTypes } from '../actions/topselling.actions';
import * as app from '../../application.state';

export function TopSellingReducer(state: TopSellingState = DefaultTopSellingState(), action: TopSellingActions): TopSellingState {
    //console.log('Action '+action.type)
    switch (action.type) {

        case TopSellingActionsTypes.Load:
            return {
                ...state,
                ...app.LoadingApplicationState(),
            }
        case TopSellingActionsTypes.LoadSuccess:        
            return {
                ...state,
                topselling: action.payload.topselling,
                ...app.LoadedApplicationState(),
            }
          case TopSellingActionsTypes.LoadError:          
            return {
              ...state,
              ...app.ErrorApplicationState(action.error),
            };
        default:
            return state;
    }
}