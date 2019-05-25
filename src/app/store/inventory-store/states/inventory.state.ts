import * as Inventorymodel from 'src/app/models/Inventory.model';
import * as app from '../../application.state';

export interface InventoryState extends app.ApplicationState {
    inventorys: Inventorymodel.IInventoryModel[]
}

export function DefaultInventoryState(): InventoryState {
    return {
        ...app.DefaultApplicationState(),
        inventorys: Inventorymodel.DefaultInventorys()
    };
}