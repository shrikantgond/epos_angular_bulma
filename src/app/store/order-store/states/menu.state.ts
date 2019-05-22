import * as Menumodel from 'src/app/models/menu.model';
import * as app from '../../application.state';

export interface MenuState extends app.ApplicationState {
    menus: Menumodel.IMenuModel[]
}

export function DefaultMenuState(): MenuState {
    return {
        ...app.DefaultApplicationState(),
        menus: Menumodel.DefaultMenus()
    };
}