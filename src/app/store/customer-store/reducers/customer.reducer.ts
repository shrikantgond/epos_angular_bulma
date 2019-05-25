import { CustomerState, DefaultCustomerState } from '../states/customer.state';
import { CustomerActions, CustomerActionsTypes } from '../actions/customer.actions';
import * as app from '../../application.state';

export function CustomerReducer(state: CustomerState = DefaultCustomerState(), action: CustomerActions): CustomerState {    
    switch (action.type) {

        case CustomerActionsTypes.Load:
            return {
                ...state,
                ...app.LoadingApplicationState(),
            }
        case CustomerActionsTypes.LoadSuccess:        
            return {
                ...state,
                customers: action.payload.Customers,
                ...app.LoadedApplicationState(),
            }
          case CustomerActionsTypes.LoadError:          
            return {
              ...state,
              ...app.ErrorApplicationState(action.error),
            };
        default:
            return state;
    }
}