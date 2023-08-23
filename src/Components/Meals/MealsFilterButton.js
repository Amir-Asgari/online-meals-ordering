// import React from 'react'
// import classes from './MealsFilterButton.module.css'
// import Card from '../UI/Card'

// const MealsFilterButton = () => {

//     const [pizzas] = useState([
//         { name: 'Margherita', toppings: ['Tomato', 'Mozzarella', 'Basil'], type: 'Vegetarian' },
//         { name: 'Pepperoni', toppings: ['Tomato', 'Mozzarella', 'Pepperoni'], type: 'Meat' },
//         { name: 'Hawaiian', toppings: ['Tomato', 'Mozzarella', 'Ham', 'Pineapple'], type: 'Meat' },
//         // دیگر پیتزا‌ها
//       ]);
    
//       const [filter, setFilter] = useState('all');
    
//       const handleFilterChange = (filterType) => {
//         setFilter(filterType);
//       };
    
//       const filteredPizzas = filter === 'all'
//         ? pizzas
//         : pizzas.filter(pizza => pizza.type === filter);

//     return (
//         <Card>

//             <div className="App">
//                 <header className="App-header">
//                     <h1>Pizza Menu</h1>
//                     <div className="filter-buttons">
//                         <button onClick={() => handleFilterChange('all')}>All</button>
//                         <button onClick={() => handleFilterChange('Vegetarian')}>Vegetarian</button>
//                         <button onClick={() => handleFilterChange('Meat')}>Meat</button>
//                     </div>
//                     <div className="pizza-list">
//                         {filteredPizzas.map((pizza, index) => (
//                             <Pizza key={index} name={pizza.name} toppings={pizza.toppings} />
//                         ))}
//                     </div>
//                 </header>
//             </div>
//             );
        
//         </Card>
//     )
// }

// export default MealsFilterButton