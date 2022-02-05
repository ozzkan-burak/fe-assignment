import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

// interfaces
import {IData} from "@/interfaces/data";
// utils
import { filterData } from "../../utils/filterData";



const Popular = () => {

  const data = useSelector<IData>(state => state.data);
  
  const [popularData, setPopularData] = useState<any>([]);

  useEffect(()=>{

    console.log(data)
    setPopularData(filterData(data as any, "Popüler Ürünler"));
   
  },[]);

  useEffect(()=>{

    console.log(popularData)
    
   
  },[popularData]);


  return (
    <div>
      Popular
    </div>
  );
};

export default Popular;
