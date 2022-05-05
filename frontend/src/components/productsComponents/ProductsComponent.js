import React from 'react';

const ProductsComponent = (props) => {
  const { products, onAdd } = props;

  return (
    <div className="ui grid center aligner segmant">
      {products.map((product) => {
        return (
          <div className="five wide column" key={product.image}>
            <div className="ui card" key={product.id}>
              <div className="image">
                <img src={product.image} />
              </div>
              <div className="content">
                <a className="header">{product.name}</a>
                <div className="meta" style={{ marginTop: '5px' }}>
                  <span className="date">Cena: {product.price}Kč</span>
                </div>
                <div className="description">
                  <h4>Ingredience</h4>
                </div>
                <div className="description" style={{ marginTop: '10px' }}>
                  {product.ingredients.map((ingredient, i) => {
                    return <li key={i}> {ingredient} </li>;
                  })}
                </div>
              </div>
              <div className="extra content">
                <a onClick={() => onAdd(product)}>
                  <i className="shop icon"></i>
                  Přidat do košíku
                </a>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProductsComponent;
