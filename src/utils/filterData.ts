import { IData } from "@/interfaces/data";

export const filterData = (data: IData, text: string) => {
  if(!data || !text) return [];
  return data.products.filter((item: any) =>  item.label === text);
}