export interface ITileModel{
    title:string;
    count:string;
    change:number;
    link:string;
  }

  export function DefaultTiles(): ITileModel[] {
    return [{
        title:'Tile 1',
        count:'',
        change:0,
        link:'#'
    },
    {
        title:'Tile 2',
        count:'',
        change:0,
        link:'#'
    },
    {
        title:'Tile 3',
        count:'',
        change:0,
        link:'#'
    },
    {
        title:'Tile 4',
        count:'',
        change:0,
        link:'#'
    }]
}