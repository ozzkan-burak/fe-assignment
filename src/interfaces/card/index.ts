
export interface Datum {
  id?: string;
  label?: string;
  price?: number;
  discountLabel?: string;
  firstPrice?: number;
  details?: string[];
}

export interface ICard {
  data: Datum;
  id: string;
}