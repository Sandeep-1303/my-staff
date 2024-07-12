import React, { useState } from 'react';
import './App.css';
import AddRecipe from './components/AddRecipe';
import RecipeDetail from './components/RecipeDetail';
import RecipeList from './components/RecipeList';



//Main App Component as a functional component
function App() {
  //State for storing recipe
  const [recipes, setRecipes] = useState([]);
  // State for storing the selected recipe 
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  // Function to add a new recipe to the list 
  const addRecipe = (recipe)=>{
    setRecipes([...recipes, recipe]);
  };

  //Fumction to set the currently selected recipe
  const selectRecipe = (recipe)=>{
    setSelectedRecipe(recipe);
  };
  return (
    <div>
      
      <h1>Recipe Book</h1>
      {/* Component to add a new recipe */}
      <AddRecipe onAddRecipe={addRecipe}/>
      {/* List of recipes with a function to handle recipe selection */}
      <RecipeList recipes={recipes} onSelectRecipe={selectRecipe}/>
      {/* conditionally render recipedetail if a recipe={selected} */}
      {selectedRecipe && <RecipeDetail recipe={selectedRecipe}/>}
    </div>
  );
}

export default App;
