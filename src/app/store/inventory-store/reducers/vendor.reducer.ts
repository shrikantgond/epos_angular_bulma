import { VendorState, DefaultVendorState } from '../states/vendor.state';
import { VendorActions, VendorActionsTypes } from '../actions/vendor.actions';
import * as app from '../../application.state';

export function VendorReducer(state: VendorState = DefaultVendorState(), action: VendorActions): VendorState {
    //console.log('Action '+action.type)
    switch (action.type) {

        case VendorActionsTypes.Load:
            return {
                ...state,
                ...app.LoadingApplicationState(),
            }
        // case VendorActionsTypes.Save:
        //     // const Vendorindex = state.Vendors.findIndex(o => o.tablecode && o.tablecode === action.payload.tablecode);
        //     // if (Vendorindex > -1) {
        //     //     let itemindex = -1;
        //     //     if (state.Vendors[Vendorindex].items && state.Vendors[Vendorindex].items.length > 0) {
        //     //         itemindex = state.Vendors[Vendorindex].items.findIndex(i => i.menutitle === action.payload.menuitem.menutitle);
        //     //     }

        //     //     switch (action.payload.actiontype) {
        //     //         case 'ADD':
        //     //             if (itemindex > -1) {
        //     //                 state.Vendors[Vendorindex].items[itemindex].quantity++;
        //     //             }
        //     //             else {
        //     //                 state.Vendors[Vendorindex].items.push(action.payload.menuitem);
        //     //             }
        //     //             break;
        //     //         case 'UPDATE':
        //     //             if (itemindex > -1) {
        //     //                 state.Vendors[Vendorindex].items[itemindex] = action.payload.menuitem;
        //     //             }
        //     //             break;
        //     //         case 'DELETE':
        //     //             if (itemindex > -1) {
        //     //                 console.log('wtf');
        //     //                 console.log(state.Vendors[Vendorindex].items.filter(item =>
        //     //                     item.menutitle !== action.payload.menuitem.menutitle
        //     //                 ));
        //     //                 state.Vendors[Vendorindex].items = state.Vendors[Vendorindex].items.filter(item =>
        //     //                     item.menutitle !== action.payload.menuitem.menutitle);
        //     //                 console.log(state.Vendors);
        //     //             }
        //     //             break;
        //     //         default:
        //     //             break;
        //     //     }

        //     // } else { // if Vendor not found add it dont check actiontype
        //     //     const newVendor: IVendorModel = { tablecode: action.payload.tablecode, items: [action.payload.menuitem] }
        //     //     state.Vendors = state.Vendors.concat(newVendor);
        //     // }

        //     return {
        //         ...state,
        //         ...app.LoadedApplicationState(),
        //     }
        case VendorActionsTypes.LoadSuccess:
            return {
                ...state,
                //Vendors:[...state.Vendors, action.payload.Vendors]
                vendors: action.payload.vendors,
                ...app.LoadedApplicationState(),
            }
        case VendorActionsTypes.LoadError:
            return {
                ...state,
                ...app.ErrorApplicationState(action.error),
            };
        default:
            return state;
    }
}