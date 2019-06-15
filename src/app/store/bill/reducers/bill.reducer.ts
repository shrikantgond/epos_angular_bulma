import { BillState, DefaultBillState } from '../states/bill.state';
import { BillActions, BillActionsTypes } from '../actions/bill.actions';
import * as app from '../../application.state';

export function BillReducer(state: BillState = DefaultBillState(), action: BillActions): BillState {    
    switch (action.type) {

		case BillActionsTypes.Load_getbills_number_customer: 
	return {
	...state,
    ...app.LoadingApplicationState(),
	}

case BillActionsTypes.Load_getbills_number_customerSuccess:
	return {
	...state,
	bills: action.payload.bills,
    ...app.LoadedApplicationState(),
	}

case BillActionsTypes.Load_getbills_number_customerError:
    return {
        ...state,
        ...app.ErrorApplicationState(action.error),
    };

case BillActionsTypes.Load_getbills_date: 
	return {
	...state,
    ...app.LoadingApplicationState(),
	}

case BillActionsTypes.Load_getbills_dateSuccess:
	return {
	...state,
	bills: action.payload.bills,
    ...app.LoadedApplicationState(),
	}

case BillActionsTypes.Load_getbills_dateError:
	console.error(action.error);
    return {
        ...state,
        ...app.ErrorApplicationState(action.error),
    };



    }
}