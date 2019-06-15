import * as Billdetailsmodel from 'src/app/models/billdetails.model';
import * as app from '../../application.state';

export interface BilldetailsState extends app.ApplicationState {
    billdetailss: Billdetailsmodel.IBilldetailsModel[]
}

export function DefaultBilldetailsState(): BilldetailsState {
    return {
        ...app.DefaultApplicationState(),
        billdetailss: Billdetailsmodel.DefaultBilldetailss()
    };
}