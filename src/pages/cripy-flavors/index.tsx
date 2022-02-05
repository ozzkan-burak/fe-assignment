import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
// interfaces
import {IData} from "@/interfaces/data";
// components
import Card from "../../components/card";
import { ICard } from "@/interfaces/card";

// actions
import { getData } from "../../redux/actions";

const CrispyFlavors = () => {

  const data = useSelector<IData>(state => state.data);

  const dispatch = useDispatch();

  const [crispyData, setCrispyData] = useState<any>([]);
  
  useEffect(()=>{

    dispatch(getData('Çıtır Lezzetler'));
  },[]);


  useEffect(()=>{
    setCrispyData(data)
  },[data]);


  return (
    crispyData.length > 0 &&  crispyData[0].data.map((item: ICard)=>(
      <Card key={item.id} item={item} />
    ))
  );
};

export default CrispyFlavors;
