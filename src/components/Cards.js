import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className="cards">
      <h1>Visit the best beaches in the world!</h1>
      <div className="cards-container">
        <div className="cards-wrapper">
          <ul className="cards-items">
            <CardItem
              path="/destinations"
              label="Escape"
              src="images/img-1.jpg"
              text="Stunning places where you can get away from the crowds"
            />
            <CardItem
              path="/adventure"
              label="Discovery"
              src="images/img-2.jpg"
              text="Dive into the clear crystal clear waters, follow the fantastic marine life up close"
            />
          </ul>
          <ul className="cards-items">
            <CardItem
              path="/services"
              label="Contemplation"
              src="images/img-3.jpg"
              text="Set Sail in blue waters and contemplate epic places"
            />
            <CardItem
              path="/adventure"
              label="Adventure"
              src="images/img-4.jpg"
              text="Venture into landscapes and watch unforgettable sunsets"
            />
            <CardItem
              path="/romance"
              label="Luxury"
              src="images/img-5.jpg"
              text="Hotels and resorts with many advantages beyond comfort"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
