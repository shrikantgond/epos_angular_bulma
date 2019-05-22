import { MenuState, DefaultMenuState } from '../states/menu.state';
import { MenuActions, MenuActionsTypes } from '../actions/menu.actions';
import * as app from '../../application.state';

export function MenuReducer(state: MenuState = DefaultMenuState(), action: MenuActions): MenuState {
    //console.log('Action '+action.type)
    switch (action.type) {

        case MenuActionsTypes.Load:
            return {
                ...state,
                ...app.LoadingApplicationState(),
            }
        case MenuActionsTypes.LoadSuccess:        
            return {
                ...state,
                menus: action.payload.menus,
                ...app.LoadedApplicationState(),
            }
          case MenuActionsTypes.LoadError:          
            return {
              ...state,
              ...app.ErrorApplicationState(action.error),
            };
        default:
            return state;
    }
}