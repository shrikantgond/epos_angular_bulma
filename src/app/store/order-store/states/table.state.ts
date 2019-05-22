import * as Tablemodel from 'src/app/models/table.model';
import * as app from '../../application.state';

export interface TableState extends app.ApplicationState {
    tables: Tablemodel.ITableModel[]
}

export function DefaultTableState(): TableState {
    return {
        ...app.DefaultApplicationState(),
        tables: Tablemodel.DefaultTables()
    };
}