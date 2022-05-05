import React, { useContext } from 'react';
import { CardContext } from '../context/CardContext';

const FinalPrice = () => {
  const price = useContext(CardContext);

  return (
    <div>
      <h4>Konečná cena včetně DPH</h4>
      {price.shopCard === null ? (
        <div>0 ,-</div>
      ) : (
        <>
          <div>
            Částku nutno uhradit převodem z účtu.{' '}
            <strong> {`${price.shopCard.finalPrice.toFixed(0)}`} </strong>Kč
          </div>
          <div>Z toho DPH: {`${price.shopCard.taxPrice.toFixed(0)}`} Kč</div>
        </>
      )}
    </div>
  );
};

export default FinalPrice;
