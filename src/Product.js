/**
 * Created by USER on 1/9/2025.
 */
import React from "react";
import "./Product.css";

function Product({id, title, image, price, rating}) {
	return (
		<div>
			<div className="product">
				<div className="product__info">

					<p>Bennett Mystic 15.6 inch Laptop Shoulder Messenger Sling Office Bag, Water Repellent Fabric for</p>
					<p className="product__price">
						<small>$</small>
						<strong>{price}</strong>
					</p>

					<div className="product__rating">
						{Array(rating)
							.fill()
							.map((_, i) => (
								<p>⭐</p>
							))}
					</div>
				</div>

				<img src="uploads/header-background.jpg" alt="Product Image" className="product__image"/>

				<button>Add to Basket</button>
			</div>
		</div>
	);
}
export default Product