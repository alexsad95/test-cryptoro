import React from 'react';
import Header from './components/Header/Header.jsx';
import Hero from './components/Hero/Hero.jsx';
import PopularProducts from './components/PopularProducts/PopularProducts.jsx';
import './styles/global.css';

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <PopularProducts />
      </main>
    </div>
  );
}

export default App;
