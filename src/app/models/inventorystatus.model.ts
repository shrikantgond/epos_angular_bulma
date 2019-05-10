export interface IInventoryStatusModel{
    title:string;
    quantity:number;    
    isactionable: boolean;
    actionlink?: string;
  }

  export function DefaultInventoryStatus(): IInventoryStatusModel[] {
    return [{
        title:'Tea Powder',        
        quantity:57,
        isactionable: false
    },
    {
        title:'Sugar',        
        quantity:25,
        isactionable: true,
        actionlink:'inventory'
    },
    {
        title:'Salt',        
        quantity:89,
        isactionable: false,
        actionlink:'inventory'
    },
    {
        title:'White Bread',        
        quantity:6,
        isactionable: true,
        actionlink:'inventory'
    },
    {
        title:'Amul Butter',        
        quantity:57,
        isactionable: false,
        actionlink:'inventory'
    },
    {
        title:'Safolla RiceBran Helth plus oil',        
        quantity:14,
        isactionable: true,
        actionlink:'inventory'
    },
]
}