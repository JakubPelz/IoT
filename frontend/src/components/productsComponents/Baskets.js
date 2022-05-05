import React, { useState } from 'react';
import { CardContext } from '../context/CardContext';
import { Navigate } from 'react-router';

const Baskets = (props) => {
  const { cartItems, onAdd, onRemove } = props;
  const { setShopCard } = React.useContext(CardContext);

  const [redirect, setRedirect] = useState(false);

  const itemsPrice = cartItems.reduce((a, c) => a + c.price * c.qty, 0);
  const taxPrice = itemsPrice * 0.15;
  const finalPrice = itemsPrice + taxPrice;

  const submit = () => {
    const response = { cartItems, itemsPrice, taxPrice, finalPrice };
    setShopCard(response);
    setRedirect(true);
  };

  if (redirect) {
    return <Navigate to={'/final'} />;
  }

  return (
    <div>
      {' '}
      <h2>Cart Items</h2>
      <div>{cartItems.length === 0 && <div>Náupní košík je prázdný.</div>}</div>
      <div className="ui grid center aligner segmant">
        {cartItems.map((item) => (
          <div key={item.id} className="five wide column">
            <strong>{item.name}</strong> cena bez DPH: {item.price.toFixed(0)}{' '}
            Kč/1ks
            <div className="ui card">
              <div className="extra content">
                <span className="left floated like">
                  <a onClick={() => onRemove(item)}>
                    <i className="minus icon"></i>
                  </a>
                </span>
                <span style={{ paddingLeft: '10px', color: 'black' }}>
                  V košíku máte: {item.qty} Ks
                </span>
                <span className="right floated star">
                  <a onClick={() => onAdd(item)}>
                    <i className="plus icon"></i>
                  </a>
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="ui right aligned container" style={{ marginTop: '20px' }}>
        <div style={{ fontSize: '20px', fontWeight: 'bold' }}>Cena celkem:</div>
        <div className="ui list">
          <div className="item">
            Cena celkem bez DPH: {itemsPrice.toFixed(0)} Kč
          </div>
          <div className="item">DPH: {taxPrice.toFixed(0)} Kč</div>
          <div className="item">
            Cena Celkem s DPH: {finalPrice.toFixed(0)} Kč
          </div>
        </div>
        <button
          className="ui blue button"
          type="submit"
          style={{ marginTop: '30px', width: '200px' }}
          onClick={submit}
        >
          Potvrdit
        </button>
      </div>
    </div>
  );
};

export default Baskets;
