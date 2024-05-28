import { useState } from "react";
import './Card.css';

const Card = ({ title, imageUrl }) => {
    const [isHovered, setIsHovered] = useState(false);
    const cvs = process.env.PUBLIC_URL + '/cvs.png';
  
    return (
      <div
        className="card"
        style={{
          backgroundImage: `url(${cvs})`,
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {isHovered && <Overlay />}
        <h3 className="card-title">{title}</h3>
      </div>
    );
  };
  
const Overlay = () => {
    return (
        <div className="overlay">
            <p className="overlay-text">Hover Overlay</p>
        </div>
    );
};

export default Card;