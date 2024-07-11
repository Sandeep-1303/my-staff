import './App.css';
import React,{useState} from 'react';
import MenuList from "./components/MenuList";
import DishDetails from "./components/DishDetails";
function App() {
  // state for holding the currently selected dish 
  const [selectedDish, setSelectedDish] = useState(null);

  //sample data for the dishes
  const dishes = [
    {id: 1, name: 'Chiken Biriyani', description: 'Hyderadab Dum Biriyani'},
    {id: 2, name: 'Ragi Sangati & NattuKodi pulusu', description: 'Rayalaseema Special'},
  ];

  return (
    <div>
    <h1>Restaurant Menu</h1>
       {/* menulist is passed the dishes data and a function to update the selected dish  */}
       <MenuList dishes= {dishes} onDishSelect={setSelectedDish}></MenuList>
       {/* DishDetails is required conditionally based on if dishis selected  */}
       {selectedDish && <DishDetails dish={selectedDish}></DishDetails>}
    </div>
  );
}

export default App;
