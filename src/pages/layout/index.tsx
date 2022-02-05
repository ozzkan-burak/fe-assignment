import { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

//pages
import Popular from '../popular';
import Burgers from '../burgers';
import ChickenProducts from '../chicken-products';
import Menus from '../menus';
import CrispyFlavors from '../cripy-flavors';
import Delights from '../delights';


// actions
import { getData } from "../../redux/actions";


const Layout = () => {

  
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getData())
  },[]);


  return (
    <div className="layout">
      <Switch>
        <Route path="/" exact component={Popular} />
        <Route path="/menus" component={Menus} />
        <Route path="/burgers" component={Burgers} />
        <Route path="/chicken" component={ChickenProducts} />
        <Route path="/crispy" component={CrispyFlavors} />
        <Route path="/delights" component={Delights} />
      </Switch>
    </div>
  );
};

export default Layout;
