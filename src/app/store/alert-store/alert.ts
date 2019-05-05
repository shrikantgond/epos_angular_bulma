import {createDefaultLoadable, Loadable} from '../loadable/loadable';
import {NewActionsUnion, AlertActionsTypes} from './Alert.actions';
import {withLoadable} from '../loadable/with-loadable';

export interface Alert extends Loadable {
  entities: string[];
}

export function createDefaultAlert(): Alert {
  return {
    ...createDefaultLoadable(),
    entities: []
  };
}

function baseAlertReducer(state: Alert = createDefaultAlert(), action: NewActionsUnion): Alert {
  switch (action.type) {
    case AlertActionsTypes.LoadSuccess:
      return {
        ...state,
        entities: action.payload.entities
      };
    default:
      return state;
  }
}

export function AlertReducer(state: Alert, action: NewActionsUnion): Alert {
  return withLoadable(baseAlertReducer, {
    loadingActionType: AlertActionsTypes.Load,
    successActionType: AlertActionsTypes.LoadSuccess,
    errorActionType: AlertActionsTypes.LoadError,
  })(state, action);
}
