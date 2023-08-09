import React from 'react';
import ProductCard from './ProductCard';

function ProductGrid({ setCartValue }) {
  const productData = [
    {
        name: 'Fancy Product 1',
        price: '$40.00-$80.00',
        isSale: false,
        isSpecial: false,
        rating: '⭐⭐⭐',
        description: 'This is a fancy product with special and sale labels.',
      },
      {
        name: 'Special Item 1',
        price: '$18.00',
        rating: '⭐⭐',
        isSale: false,
        isSpecial: false,
        description: 'A special item with a high rating.',
      },
      {
        name: 'Sale Item 1',
        price: '$25.00',
        rating: '⭐⭐⭐',
        isSale: false,
        isSpecial: false,
        description: 'An item on sale.',
      },
      {
        name: 'Popular Item 1',
        price: '$40.00',
        isSale: false,
        isSpecial: true,
        rating: '⭐⭐⭐⭐⭐',
        description: 'A popular item with a high rating.',
      },
      {
        name: 'Fancy Product 2',
        price: '$50.00-$90.00',
        isSale: true,
        isSpecial: false,
        rating: '⭐⭐⭐',
        description: 'Another fancy product with special and sale labels.',
      },
      {
        name: 'Special Item 2',
        price: '$15.00',
        rating: '⭐⭐⭐⭐',
        isSpecial: false,
        isSale: false,
        description: 'Another special item with a good rating.',
      },
      {
        name: 'Popular Item 2',
        price: '$40.00',
        rating: '⭐⭐⭐⭐⭐',
        isSpecial: true,
        isSale: false,
        description: 'A popular item with a high rating.',
      },
      {
        name: 'Popular Item 3',
        price: '$40.00',
        isSale: true,
        isSpecial: false,
        rating: '⭐',
        description: 'A popular item with a high rating.',
      },
    ];

  return (
    <div>
      <div className="container">
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4">
          {productData.map((product, index) => (
            <div key={index} className="col-mb-4">
              <ProductCard cardData={product} setCartValue={setCartValue} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductGrid;
