import React from "react";
import "./CheckoutProduct.css";
import { useStateValue } from "./StateProvider";

function CheckoutProduct({ id, image, title, price, rating, hideButton }) {
  const [{ basket }, dispatch] = useStateValue();
  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };

  return (
    <div className="checkoutProduct">
      <img className="checkoutPro__Img" src={image} />

      <div className="checkoutPro__info">
        <p className="checkoutPro__title">{title}</p>
        <p className="checkoutPro__price">
          <small>
            <strong>${price}</strong>
          </small>
        </p>
        <div className="checkoutPro__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <span>&#11088;</span>
            ))}
        </div>
        {!hideButton && (
          <button className="checkoutPro__button" onClick={removeFromBasket}>
            Remove from Basket
          </button>
        )}
      </div>
    </div>
  );
}

export default CheckoutProduct;
