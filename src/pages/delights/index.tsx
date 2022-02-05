import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
// interfaces
import {IData} from "@/interfaces/data";
// components
import Card from "../../components/card";
import { ICard } from "@/interfaces/card";

// actions
import { getData } from "../../redux/actions";

const Delights = () => {

  const data = useSelector<IData>(state => state.data);

  const dispatch = useDispatch();


  const [delightData, setDelightData] = useState<any>([]);
  
  useEffect(()=>{

    dispatch(getData('Delight Ürünler'));
  },[]);


  useEffect(()=>{
    setDelightData(data)
  },[data]);

  return (
    delightData.length > 0 &&  delightData[0].data.map((item: ICard)=>(
      <Card key={item.id} item={item} />
    ))
  );
};

export default Delights;
