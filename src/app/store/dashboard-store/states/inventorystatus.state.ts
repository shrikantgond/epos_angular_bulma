import * as InventoryStatusmodel from 'src/app/models/inventorystatus.model';
import * as app from '../../application.state';

export interface InventoryStatusState extends app.ApplicationState {
    inventorystatus: InventoryStatusmodel.IInventoryStatusModel[]
}

export function DefaultInventoryStatusState(): InventoryStatusState {
    return {
        ...app.DefaultApplicationState(),
        inventorystatus: InventoryStatusmodel.DefaultInventoryStatus()
    };
}