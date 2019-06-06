import { BillState, DefaultBillState } from '../states/bill.state';
import { BillActions, BillActionsTypes } from '../actions/bill.actions';
import * as app from '../../application.state';

export function BillReducer(state: BillState = DefaultBillState(), action: BillActions): BillState {
    //console.log('Action '+action.type)
    switch (action.type) {

        case BillActionsTypes.Load:
            return {
                ...state,
                ...app.LoadingApplicationState(),
            }
        // case BillActionsTypes.Save:
        //     // const Billindex = state.Bills.findIndex(o => o.tablecode && o.tablecode === action.payload.tablecode);
        //     // if (Billindex > -1) {
        //     //     let itemindex = -1;
        //     //     if (state.Bills[Billindex].items && state.Bills[Billindex].items.length > 0) {
        //     //         itemindex = state.Bills[Billindex].items.findIndex(i => i.menutitle === action.payload.menuitem.menutitle);
        //     //     }

        //     //     switch (action.payload.actiontype) {
        //     //         case 'ADD':
        //     //             if (itemindex > -1) {
        //     //                 state.Bills[Billindex].items[itemindex].quantity++;
        //     //             }
        //     //             else {
        //     //                 state.Bills[Billindex].items.push(action.payload.menuitem);
        //     //             }
        //     //             break;
        //     //         case 'UPDATE':
        //     //             if (itemindex > -1) {
        //     //                 state.Bills[Billindex].items[itemindex] = action.payload.menuitem;
        //     //             }
        //     //             break;
        //     //         case 'DELETE':
        //     //             if (itemindex > -1) {
        //     //                 console.log('wtf');
        //     //                 console.log(state.Bills[Billindex].items.filter(item =>
        //     //                     item.menutitle !== action.payload.menuitem.menutitle
        //     //                 ));
        //     //                 state.Bills[Billindex].items = state.Bills[Billindex].items.filter(item =>
        //     //                     item.menutitle !== action.payload.menuitem.menutitle);
        //     //                 console.log(state.Bills);
        //     //             }
        //     //             break;
        //     //         default:
        //     //             break;
        //     //     }

        //     // } else { // if Bill not found add it dont check actiontype
        //     //     const newBill: IBillModel = { tablecode: action.payload.tablecode, items: [action.payload.menuitem] }
        //     //     state.Bills = state.Bills.concat(newBill);
        //     // }

        //     return {
        //         ...state,
        //         ...app.LoadedApplicationState(),
        //     }
        case BillActionsTypes.LoadSuccess:
            console.log(action.payload.bills);
            return {
                ...state,
                //Bills:[...state.Bills, action.payload.Bills]
                bills: action.payload.bills,
                ...app.LoadedApplicationState(),
            }
        case BillActionsTypes.LoadError:
            return {
                ...state,
                ...app.ErrorApplicationState(action.error),
            };
        default:
            return state;
    }
}