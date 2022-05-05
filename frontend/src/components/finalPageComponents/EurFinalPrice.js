import React, { useContext } from 'react';
import { CardContext } from '../context/CardContext';
import { ForeignContext } from '../context/ForeignContext';

const EurFinalPrice = () => {
  const price = useContext(CardContext);

  const euro = useContext(ForeignContext);

  return (
    <div>
      <h4>Konečná cena včetně DPH</h4>
      {price.shopCard === null ? (
        <div>0 ,-</div>
      ) : (
        <>
          <div>
            Částku nutno uhradit převodem z účtu.{' '}
            <strong>
              {' '}
              {`${(price.shopCard.finalPrice / euro.foreign).toFixed(3)}`}{' '}
            </strong>
            EUR
          </div>
          <div>
            Z toho DPH:{' '}
            {`${(price.shopCard.taxPrice / euro.foreign).toFixed(3)}`} EUR
          </div>
        </>
      )}
    </div>
  );
};

export default EurFinalPrice;
