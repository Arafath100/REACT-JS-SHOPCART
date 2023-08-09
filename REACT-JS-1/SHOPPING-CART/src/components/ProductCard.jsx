import React, { useState } from 'react';

function ProductCard({ cardData, setCartValue }) {
  const [isInCart, setIsInCart] = useState(false);

  const handleCartButtonClick = () => {
    if (isInCart) {
      setCartValue((value) => value - 1);
    } else {
      setCartValue((value) => value + 1);
    }
    setIsInCart(!isInCart);
  };

  return (
    <div className="card m-2" style={{ backgroundColor: 'lightgreen', width: '200px', height: '350px' }}>
        <img
        src="data:image/png;base64,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"
        className="card-img-top"
        alt="Product"
        style={{ maxHeight: '150px', objectFit: 'cover' }}
      />

      {cardData.isSale && (
        <div className="badge bg-dark text-white position-absolute" style={{ top: '0.5rem', right: '0.5rem' }}>
          Sale
        </div>
      )}
      
      {cardData.isSpecial && (
        <div className="badge bg-danger text-white position-absolute" style={{ top: '0.5rem', right: '0.5rem' }}>
          Special
        </div>
      )}
      
      <div className="card-body p-4 text-center">
        <h5 className="card-title">{cardData.name}</h5>
        <p className="card-text">
          {cardData.rating && <div>{cardData.rating}</div>}
          {cardData.originalPrice ? (
            <div>
              <span style={{ textDecoration: 'line-through' }}>
                {cardData.originalPrice}
              </span>{' '}
              {cardData.price}
            </div>
          ) : (
            `Price: ${cardData.price}`
          )}
        </p>
      </div>
      <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
        <div className="text-center">
          <button
            className={`btn btn-outline-dark mt-auto ${
              isInCart ? 'btn-remove' : ''
            }`}
            onClick={handleCartButtonClick}
            style={{ backgroundColor: 'black', color: 'white' } }
          >
            {isInCart ? 'Remove from Cart' : 'Add To Cart'}
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
