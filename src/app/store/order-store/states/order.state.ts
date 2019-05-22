import * as Ordermodel from 'src/app/models/order.model';
import * as app from '../../application.state';

export interface OrderState extends app.ApplicationState {
    orders: Ordermodel.IOrderModel[]
}

export function DefaultOrderState(): OrderState {
    return {
        ...app.DefaultApplicationState(),
        orders: Ordermodel.GetOrders()
    };
}