import React from "react";
import "./Home.css";
import "./Product";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_45M_v2_1x._CB432458380_.jpg"
          alt=""
        />
        <div className="home__row">
          <Product
            id={1212122112}
            title="The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses Hardcover – Illustrated, September 13, 2011"
            price={29.99}
            image="https://m.media-amazon.com/images/I/81-QB7nDh4L._AC_UY327_FMwebp_QL65_.jpg"
            rating={5}
          />
          <Product
            id={12112121}
            title="Food Grinder Attachment For KitchenAid Stand Mixers Includes 2 Sausage Filler Tubers, 4 grinding plates, Meat Grinder Attachment for kitchenAid, White"
            price={239.0}
            image="https://m.media-amazon.com/images/I/61-U1Bp5HTL._AC_UY327_FMwebp_QL65_.jpg"
            rating={4}
          />
        </div>

        <div className="home__row">
          <Product
            id={12112121}
            title="Samsung 27-Inch CRG5 240Hz Curved Gaming Monitor (LC27RG50FQNXZA) – Computer Monitor, 1920 x 1080p Resolution, 4ms Response Time, G-Sync Compatible, HDMI,Black"
            price={339.0}
            image="https://m.media-amazon.com/images/I/71sS9adB8XL._AC_UY327_FMwebp_QL65_.jpg"
            rating={4}
          />
          <Product
            id={12112121}
            title="Samsung 27-Inch CRG5 240Hz Curved Gaming Monitor (LC27RG50FQNXZA) – Computer Monitor, 1920 x 1080p Resolution, 4ms Response Time, G-Sync Compatible, HDMI,Black"
            price={339.0}
            image="https://m.media-amazon.com/images/I/61is5y-+MeL._AC_UY327_FMwebp_QL65_.jpg"
            rating={4}
          />
          <Product
            id={12112121}
            title="Apple iPad Pro (11-inch, Wi-Fi, 64GB) - Space Gray (Latest Model) (Renewed)"
            price={64}
            image="https://m.media-amazon.com/images/I/51HWDb-OF1L._AC_UY327_FMwebp_QL65_.jpg"
            rating={4}
          />
        </div>

        <div className="home__row">
          <Product
            id={12112121}
            title="Corded Phone - Phones for Seniors - Phone for Hearing impaired - Earth Day Green - Retro Novelty Telephone - an Improved Version of The Princess Phones in 1965 - Style Big Button - iSoHo Phones"
            price={64}
            image="https://m.media-amazon.com/images/I/61gQlZn8REL._AC_UY327_FMwebp_QL65_.jpg"
            rating={4}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
