import React from "react";
import "./Home.css";
import Product from "../src/Product";
function Home() {
  return (
    <div class="home">
      <img
        className="home__image"
        src="./image/banner.jpg"
        alt=""
        srcset="As a Man Thinketh"
      />
      {/* product */}
      <div className="home__row">
        <Product
          id="123"
          title="As a Man Thinketh"
          price={59}
          rating={5}
          image="https://m.media-amazon.com/images/I/81tEgsxpNZS._AC_UY327_FMwebp_QL65_.jpg"
        />
        <Product
          id="1234"
          title="Instant Dual Pod Plus 3-in-1 Coffee Maker   "
          price={22759}
          rating={4}
          image="https://m.media-amazon.com/images/I/71VCut2j8NL._AC_UL480_FMwebp_QL65_.jpg"
        />
      </div>
      <div className="home_row3">
        <Product
          id="1235"
          title="Fossil Men's Machine Stainless Steel Case Quartz"
          price={1859}
          rating={4}
          image="https://m.media-amazon.com/images/I/61GA1th2Z8L._AC_UL480_FMwebp_QL65_.jpg"
        />
        <Product
          id="1236"
          title="Apple iPhone 11 Pro Max"
          price={66599}
          rating={5}
          image="https://m.media-amazon.com/images/I/71yIGykJFNS._AC_UY327_FMwebp_QL65_.jpg"
        />
        <Product
          id="12347"
          title="Adidas Youth Real Madrid "
          price={759}
          rating={5}
          image="https://m.media-amazon.com/images/I/613ENxlVPzL._AC_UL480_FMwebp_QL65_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="12348"
          title="Samsung UN78KS9500 Curved 78-Inch 4K Ultra HD Smart LED TV (2016 Model)"
          price={55599}
          rating={4}
          image="https://m.media-amazon.com/images/I/91f2b+oH3YL._AC_UY327_FMwebp_QL65_.jpg"
        />
      </div>
    </div>
  );
}

export default Home;
