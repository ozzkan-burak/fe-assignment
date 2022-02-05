
  export interface Datum {
      id: string;
      label: string;
      price: number;
      discountLabel: string;
      firstPrice?: number;
      details: string[];
  }

  export interface Product {
      label: string;
      data: Datum[];
  }

  export interface IData {
      data: Product[];
      products: Product[];
      filter: any;
  }



