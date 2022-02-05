
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
// interfaces
import {IData} from "@/interfaces/data";
// components
import Card from "../../components/card";
import { ICard } from "@/interfaces/card";

// actions
import { getData } from "../../redux/actions";



const Menus = () => {


const data = useSelector<IData>(state => state.data);

const dispatch = useDispatch();

const [menuData, setMenuData] = useState<any>([]);

useEffect(()=>{

  dispatch(getData('Menüler'));
},[]);

useEffect(()=>{
  setMenuData(data);
},[data]);


  return (
    menuData.length > 0 &&  menuData[0].data.map((item: ICard)=>(
      <Card key={item.id} item={item} />
    ))
  );
};

export default Menus;
