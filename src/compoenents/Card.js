import './Card.css'
function Card (props){
	const {card}=props;
	console.log(card);
	return(
		<>
		<div className="card">
	  	<div className="photo">
		{/* <img src={props.imga} alt="pizza-1" width="300" height="300"/> */}
	  	</div>
	  <div className="info">
		<h3>{card.name}</h3>
		 <p>
		  {card.topping}</p> 
		<h4 className="price">{card.price}</h4>
		{/* <button className="order"><a href="/#" class="new-customer" style = "text-decoration: none; color : white">Order</a></button> */}
		<button>order</button>
	  </div>
	</div>
	</>
	)
}
export default Card;