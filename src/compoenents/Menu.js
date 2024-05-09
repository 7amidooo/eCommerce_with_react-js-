import image1 from "../images/pizza-3.jpg"
import image2 from "../images/pizza-1.jpg"
import image3 from "../images/pizza-2.jpg"
import Card from "./Card";
import '../compoenents/menu.css'
import { useEffect, useState } from "react";

function Menu (){
  const menu_url = "https://private-anon-f3ca14a8d0-pizzaapp.apiary-mock.com/restaurants/restaurantId/menu?category=Pizza&orderBy=rank";
 const [pizza_list,setpizza] = useState([]);


  useEffect(()=>{
    fetch(menu_url).then((res)=> res.json()).then((date)=>setpizza(date));
  },[]);
return(
<>
<section className="menue" id="menu">
<div className="" >
  {
    pizza_list.map((pizaa)=>{
      return(
        <div className="d-inline-flex p-5" key={pizaa.id}>
        <Card card = {pizaa}/>
        </div>
      )
    })
  }
   {/* <Card Name = "bizza2" imga = {image2} description = "loerm loermloerm loerm loerm "/> */}
   {/* <Card Name = "bizza3" imga = {image3} description = "loerm loermloerm loerm loerm "/> */}
 </div>
</section>
</>
);
}

export default Menu;