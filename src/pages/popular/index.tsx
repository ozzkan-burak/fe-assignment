
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
// interfaces
import {IData} from "@/interfaces/data";
// components
import Card from "../../components/card";
import { ICard } from "@/interfaces/card";

// actions
import { getData } from "../../redux/actions";

const Popular = () => {

  const data = useSelector<IData>(state => state.data);

  const dispatch = useDispatch();

  const [popularData, setPopularData] = useState<any>([]);
  
  useEffect(()=>{

    dispatch(getData('Popüler Ürünler'));
  },[]);


  useEffect(()=>{
    setPopularData(data)
  },[data]);


  return (
    popularData.length > 0 &&  popularData[0].data.map((item: ICard)=>(
      <Card key={item.id} item={item} />
    ))
  );
};

export default Popular;
