import React from 'react';

export const CartWidget = () => {
  return (
    <div
      onClick={() => {
        console.log('You have clicked the cartWidget');
      }}
    >
      <span className="material-symbols-outlined">shopping_cart</span>
      <span>5</span>
    </div>
  );
};
