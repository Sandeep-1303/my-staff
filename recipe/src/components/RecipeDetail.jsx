import React from "react";
import "./RecipeDetail.css";

// RecipeDetail component as a functional component

const RecipeDetail = ({recipe})=>{
    return(
        <div>
            <div className="recipe-detail">
                {/* Display the tittle  */}
                <h3>{recipe.title}</h3>
                <p>{recipe.description}</p>
            </div>
        </div>
    );
};
export default RecipeDetail;