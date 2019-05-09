export interface ITopSellingModel{
    title:string;
    quantity:number;
  }

  export function DefaultTopSelling(): ITopSellingModel[] {
    return [{
        title:'Masala Chai',        
        quantity:8,
    },
    {
        title:'Tripple Schewan Fried Rice',        
        quantity:65,
    },
    {
        title:'Special Masala Dosa',        
        quantity:40,
    },
    {
        title:'Onion Uttapa',        
        quantity:45,
    },
    {
        title:'Maggie',        
        quantity:20,
    }
]
}