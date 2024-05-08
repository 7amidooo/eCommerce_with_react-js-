import image1 from "../images/pizza-3.jpg"
import image2 from "../images/pizza-1.jpg"
import image3 from "../images/pizza-2.jpg"
import Card from "./Card";
import '../compoenents/menu.css'
function Menu (){
return(
<>
<section class="menue" id="menu">
<div class="cards" >
   <Card Name = "bizza1" imga = {image1} description = "loerm loermloerm loerm loerm "/>
   <Card Name = "bizza2" imga = {image2} description = "loerm loermloerm loerm loerm "/>
   <Card Name = "bizza3" imga = {image3} description = "loerm loermloerm loerm loerm "/>
 </div>
</section>
</>
);
}

export default Menu;