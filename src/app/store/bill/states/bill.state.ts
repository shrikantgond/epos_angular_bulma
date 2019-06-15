import * as Billmodel from 'src/app/models/bill.model';
import * as app from '../../application.state';

export interface BillState extends app.ApplicationState {
    bills: Billmodel.IBillModel[]
}

export function DefaultBillState(): BillState {
    return {
        ...app.DefaultApplicationState(),
        bills: Billmodel.DefaultBills()
    };
}