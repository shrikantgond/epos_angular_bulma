import * as TopSellingmodel from 'src/app/models/topselling.model';
import * as app from '../../application.state';

export interface TopSellingState extends app.ApplicationState {
    topselling: TopSellingmodel.ITopSellingModel[]
}

export function DefaultTopSellingState(): TopSellingState {
    return {
        ...app.DefaultApplicationState(),
        topselling: TopSellingmodel.DefaultTopSelling()
    };
}