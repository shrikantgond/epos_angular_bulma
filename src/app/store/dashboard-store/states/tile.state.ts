import * as tilemodel from 'src/app/models/tile.model';
import * as app from '../../application.state';

export interface TileState extends app.ApplicationState {
    tiles: tilemodel.ITileModel[]
}

export function DefaultTileState(): TileState {
    return {
        ...app.DefaultApplicationState(),
        tiles: tilemodel.DefaultTiles()
    };
}