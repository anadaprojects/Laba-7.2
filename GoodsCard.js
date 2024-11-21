import React from 'react';

function GoodsCard(props) {
  return (
    <div className="card" style={{ width: '18rem', margin: '10px', overflow: 'hidden' }}>
      <img
        src={props.image}
        className="card-img-top"
        alt={props.name}
        style={{
          height: '200px', // Висота зображення
          objectFit: 'cover', // Обрізання фото
        }}
      />
      <div className="card-body">
        <h5 className="card-title">{props.name}</h5>
        <p className="card-text">{props.price} грн</p>
      </div>
    </div>
  );
}

export default GoodsCard;

