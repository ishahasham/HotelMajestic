import React from 'react';
import food1 from '../../assets/food1.jpg';
import food2 from '../../assets/food2.jpg';
import food3 from '../../assets/food3.webp';
import './Cuisine.css'; 

const Cuisine = () => {
  return (
    <div className="cuisine-container">
        <div>
        <h1 style={{fontSize:"35px"}}>Cuisine</h1>
        </div>
      <div className="cuisine-section">
        <h1>Breakfast Buffet</h1> 
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore ducimus, molestias asperiores vitae et libero a veniam accusamus? Voluptatem doloremque ea rerum voluptatum eligendi a quam provident aut illum veritatis.</p>
        <img src={food1} alt="Breakfast Buffet" />
      </div>

      <div className="cuisine-section">
        <h1>Lunch Buffet</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore ducimus, molestias asperiores vitae et libero a veniam accusamus? Voluptatem doloremque ea rerum voluptatum eligendi a quam provident aut illum veritatis.</p>
        <img src={food2} alt="Lunch Buffet" />
      </div>

      <div className="cuisine-section">
        <h1>Dinner Buffet</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore ducimus, molestias asperiores vitae et libero a veniam accusamus? Voluptatem doloremque ea rerum voluptatum eligendi a quam provident aut illum veritatis.</p>
        <img src={food3} alt="Dinner Buffet" />
      </div>
    </div>
  );
};

export default Cuisine;
