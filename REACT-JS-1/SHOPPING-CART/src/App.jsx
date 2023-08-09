import React, { useState } from 'react';
import NavigationBar from './components/NavigationBar';
import PageHeader from './components/PageHeader';
import ProductGrid from './components/ProductGrid';
import PageFooter from './components/PageFooter';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

function App() {
  const [cartValue, setCartValue] = useState(0);

  return (
    <>
      <NavigationBar cartValue={cartValue} />
      <PageHeader />
      <section>
        <div className="container">
          <div className="row">
            <ProductGrid setCartValue={setCartValue} />
          </div>
        </div>
      </section>
      <PageFooter />
    </>
  );
}

export default App;
