import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
// interfaces
import {IData} from "@/interfaces/data";
// components
import Card from "../../components/card";
import { ICard } from "@/interfaces/card";

// actions
import { getData } from "../../redux/actions";

const ChickenProducts = () => {


  const data = useSelector<IData>(state => state.data);

  const dispatch = useDispatch();

  const [chickenData, setChickenData] = useState<any>([]);
  
  useEffect(()=>{

    dispatch(getData('Tavuk Ürünleri'));
  },[]);


  useEffect(()=>{
    setChickenData(data)
  },[data]);


  return (
    chickenData.length > 0 &&  chickenData[0].data.map((item: ICard)=>(
      <Card key={item.id} item={item} />
    ))
  );
};

export default ChickenProducts;
