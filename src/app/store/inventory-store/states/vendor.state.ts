import * as Vendormodel from 'src/app/models/vendor.model';
import * as app from '../../application.state';

export interface VendorState extends app.ApplicationState {
    vendors: Vendormodel.IVendorModel[]
}

export function DefaultVendorState(): VendorState {
    return {
        ...app.DefaultApplicationState(),
        vendors: Vendormodel.DefaultVendors()
    };
}