import * as Customermodel from 'src/app/models/customer.model';
import * as app from '../../application.state';

export interface CustomerState extends app.ApplicationState {
    customers: Customermodel.ICustomerModel[]
}

export function DefaultCustomerState(): CustomerState {
    return {
        ...app.DefaultApplicationState(),
        customers: Customermodel.DefaultCustomers()
    };
}