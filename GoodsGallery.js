import React from 'react';
import GoodsCard from './GoodsCard';

function GoodsGallery() {
  // Масив товарів із використанням зображень із папки public
  const goods = [
    { image: '/images/images-1.jpeg', name: 'Товар 1', price: 500 },
    { image: '/images/10-tovariv-3.jpg', name: 'Товар 2', price: 700 },
    { image: '/images/700x371-63871a5fb7baf.webp', name: 'Товар 3', price: 350 },
    { image: '/images/yaki-tovary-dlya-domu-ta-sadu-najchastishe-zamovlyayut-v-interneti-logo-1024x683.jpg', name: 'Товар 4', price: 400 },
    { image: '/images/krasa-ta-zdorovya-logo-1024x683.jpg', name: 'Товар 5', price: 600 },
    { image: '/images/tovar_dlya_prodazhi.jpg', name: 'Товар 6', price: 450 },
  ];

  return (
    <div className="container mt-5">
      <div className="row">
        {goods.map((item, index) => (
          <div key={index} className="col-md-4">
            <GoodsCard image={item.image} name={item.name} price={item.price} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default GoodsGallery;
