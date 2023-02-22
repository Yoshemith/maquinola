import React from 'react';

export const ItemListContainer = ({ greeting }) => {
  return (
    <div style={{ textAlign: 'center', paddingTop: '25px' }}>
      <h2>{greeting}</h2>
    </div>
  );
};
