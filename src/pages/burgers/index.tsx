
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
// interfaces
import {IData} from "@/interfaces/data";
// components
import Card from "../../components/card";
import { ICard } from "@/interfaces/card";

// actions
import { getData } from "../../redux/actions";


const Burgers = () => {

  const data = useSelector<IData>(state => state.data);

  const dispatch = useDispatch();


  const [burgerData, setBurgerData] = useState<any>([]);
  
  useEffect(()=>{

    dispatch(getData('Burgerler'));
  },[]);


  useEffect(()=>{
    setBurgerData(data)
  },[data]);


  return (
    burgerData.length > 0 &&  burgerData[0].data.map((item: ICard)=>(
      <Card key={item.id} item={item} />
    ))
  );
};

export default Burgers;
