import React, { useContext } from 'react';
import { CardContext } from '../context/CardContext';
import { ForeignContext } from '../context/ForeignContext';

const EurProductsFinal = () => {
  const product = useContext(CardContext);

  const euro = useContext(ForeignContext);

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
                    {(item.price / euro.foreign).toFixed(3)} EUR
                  </td>
                  <td data-label="Name" style={{ textAlign: 'center' }}>
                    {((item.price * item.qty) / euro.foreign).toFixed(3)} EUR
                  </td>
                  <td data-label="Name" style={{ textAlign: 'center' }}>
                    <strong>
                      {(
                        (item.price * item.qty + item.price * 0.15 * item.qty) /
                        euro.foreign
                      ).toFixed(3)}{' '}
                      EUR
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

export default EurProductsFinal;
