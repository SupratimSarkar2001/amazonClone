import React, { useState } from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
function Product({ id, title, image, price, rating }) {
  const [Add, setAdd] = useState(false);
  const [{}, dispatch] = useStateValue();
  const addToBasket = () => {
    //add item to basket..
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id,
        title,
        image,
        price,
        rating,
      },
    });
    setAdd(true);
  };
  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>₹</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_) => (
              <p>⭐</p>
            ))}
        </div>
      </div>
      <img src={image} alt="" />
      <button onClick={addToBasket}>Add to Basket</button>
      {Add && (
        <div className="addclass">
          <CheckCircleIcon />
        </div>
      )}
    </div>
  );
}

export default Product;
