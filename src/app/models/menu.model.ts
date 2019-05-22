export interface IMenuModel{
    code:number;
    title:string;
    rate?:number;    
    typecode:string;
  }

  export function DefaultMenus(): IMenuModel[] {
    return [{
        code:1,title:'Masala Chai',rate: Math.floor(50 * Math.random()),typecode:'hd'
    },{
        code:1,title:'Hot Coffee',rate: Math.floor(50 * Math.random()),typecode:'hd'
    },{
        code:1,title:'Hot Chocalate',rate: Math.floor(50 * Math.random()),typecode:'hd'
    },{
        code:1,title:'Cafe Latte',rate: Math.floor(50 * Math.random()),typecode:'hd'
    },{
        code:1,title:'Hot Milk',rate: Math.floor(50 * Math.random()),typecode:'hd'
    },{
        code:1,title:'Cold Coffee',rate: Math.floor(50 * Math.random()),typecode:'cd'
    },{
        code:1,title:'Ice Tea',rate: Math.floor(50 * Math.random()),typecode:'cd'
    },{
        code:1,title:'Lemon Tea',rate: Math.floor(50 * Math.random()),typecode:'cd'
    },{
        code:1,title:'Mojito',rate: Math.floor(50 * Math.random()),typecode:'cd'
    },{
        code:1,title:'Cokum Sarbat',rate: Math.floor(50 * Math.random()),typecode:'cd'
    },{
        code:1,title:'Maggie',rate: Math.floor(50 * Math.random()),typecode:'sn'
    },{
        code:1,title:'Maysore Masala Dosa',rate: Math.floor(50 * Math.random()),typecode:'sn'
    },{
        code:1,title:'Special Maysore Masala Uttapa',rate: Math.floor(50 * Math.random()),typecode:'sn'
    },{
        code:1,title:'Idli',rate: Math.floor(50 * Math.random()),typecode:'sn'
    },{
        code:1,title:'Bread Butter',rate: Math.floor(50 * Math.random()),typecode:'sn'
    },{
        code:1,title:'Masala Pan',rate: Math.floor(50 * Math.random()),typecode:'ot'
    },{
        code:1,title:'Minaral Water Bottle',rate: Math.floor(50 * Math.random()),typecode:'ot'
    }
   
]
}