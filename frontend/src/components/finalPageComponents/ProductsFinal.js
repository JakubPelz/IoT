import React, { useContext } from 'react';
import { CardContext } from '../context/CardContext';

const ProductsFinal = () => {
  const product = useContext(CardContext);

  return (
    <table className="ui celled table">
      <thead>
        <tr>
          <th style={{ textAlign: 'center', minWidth: '100px' }}>Počet kusů</th>
          <th style={{ textAlign: 'center', minWidth: '200px' }}>Název</th>
          <th style={{ textAlign: 'center', minWidth: '100px' }}>Cena za KS</th>
          <th style={{ textAlign: 'center', minWidth: '100px' }}>
            Celkem bez DPH
          </th>
          <th style={{ textAlign: 'center', minWidth: '100px' }}>Cena s DPH</th>
        </tr>
      </thead>
      {product.shopCard === null ? (
        <tbody>
          <tr>
            <td>Není vybrán žádný produkt.</td>
          </tr>
        </tbody>
      ) : (
        <>
          <tbody>
            {product.shopCard.cartItems.map((item) => {
              return (
                <tr key={item.id}>
                  <td data-label="Name" style={{ textAlign: 'center' }}>
                    {item.qty}
                  </td>
                  <td data-label="Age">{item.name}</td>
                  <td data-label="Name" style={{ textAlign: 'center' }}>
                    {item.price} Kč
                  </td>
                  <td data-label="Name" style={{ textAlign: 'center' }}>
                    {item.price * item.qty}
                    Kč
                  </td>
                  <td data-label="Name" style={{ textAlign: 'center' }}>
                    <strong>
                      {(
                        item.price * item.qty +
                        item.price * 0.15 * item.qty
                      ).toFixed(0)}{' '}
                      Kč
                    </strong>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </>
      )}
    </table>
  );
};

export default ProductsFinal;
