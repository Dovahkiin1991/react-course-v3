import Title from "./Title.jsx";
import Menu from "./Menu.jsx";
import Filter from "./Filter.jsx";
import { useState } from 'react';
import menu from './data.js';

const tempCategories = menu.map((item) => item.category);
const tempSet = new Set(tempCategories);
const tempItems = ['all', ...tempSet];

const App = () => {
  const [menuItems, setMenuItems] = useState(menu);
  const [categories, setCategories] = useState(tempItems);
  const filterItems = (category) => {
    if (category === 'all') {
        setMenuItems(menu);
        return;
    }

    const newItems = menu.filter((item) => item.category === category);
    setMenuItems(newItems);
  }

  return <main>
    <section className="menu">
        <Title text='our menu' />
        <Filter categories={categories} filterItems={filterItems} />

        <Menu items={menuItems} />
    </section>
  </main>;
};
export default App;
