import React, { useState } from "react";
import "./AddRecipe.css";

// Add Recipe component as a FUNCTIONAL Component 

const AddRecipe = ({onAddRecipe}) =>{
    // Local State for Form Input
    const [title, setTitle] = useState ("");
    const [description, setDescription] = useState("");

    // Handle form submission
    const handleSubmit = (e) =>{
        e.preventDefault();
        //call tne onAddRecipe function passed as a prop
        onAddRecipe({title, description});
        // Reset form fields
        setTitle("");
        setDescription("");

    };
    return (
        <div className='add-recipe'>
        <form onSubmit={handleSubmit}>
            {/* Input field for recipe title  */}
            <input type="text" 
            value={title} 
            onChange={(e)=>setTitle(e.target.value)} 
            placeholder="Recipe title"
            required
            />
            {/* Text are for recipe description */}
            <textarea 
            value={description} 
            onChange={(e)=> setDescription(e.target.value)} 
            placeholder="Recipe Description"
            />
            {/* Submit button for the form  */}
            <button type='submit'>Add Recipe</button>
        </form>
        </div>
    );
};

export default AddRecipe;