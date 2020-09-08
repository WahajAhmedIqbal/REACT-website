import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";
function Cards() {
  return (
    <div className="cards">
      <h1>Check out these EPIC Destination</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/img-1.jpg"
              text="Explore the hidden waterfall deep
            inside the amazone jungle"
              label="Adventure"
              path="/services"
            />
            <CardItem
              src="images/img-2.jpg"
              text="Explore the hidden waterfall deep
            inside the amazone jungle"
              label="Luxury"
              path="/services"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/img-6.jpg"
              text="Explore the hidden waterfall deep
            inside the amazone jungle"
              label="Adventure"
              path="/services"
            />
            <CardItem
              src="images/img-4.jpg"
              text="Explore the hidden waterfall deep
            inside the amazone jungle"
              label="Luxury"
              path="/services"
            />
            <CardItem
              src="images/img-5.jpg"
              text="Explore the hidden waterfall deep
            inside the amazone jungle"
              label="Luxury"
              path="/services"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
