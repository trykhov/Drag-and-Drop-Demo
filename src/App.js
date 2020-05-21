import React from 'react';
import './App.css';
import Categories from './components/categories/category_titles';
import RewardRow from './components/reward_row/reward_row';

function generateRows() {
    const rows = new Array(5).fill(0);
    return rows.map((el, index) => {
      return <RewardRow key={index} rowNum={index + 1}/>
    })
}

function App() {
  return (
    <main id="board">
      <header>
        <section id="rewards">
          <h2>Rewards</h2>
        </section>
        <section id="categories">
          <h2>Categories</h2>
          <Categories/>
        </section>
      </header>
      {generateRows()}
    </main>
  );
}

export default App;
