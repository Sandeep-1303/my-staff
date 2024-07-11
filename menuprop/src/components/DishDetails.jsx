import React from "react";
import PropTypes from "prop-types";

function DishDetails({dish}){
    // Destructing to extract name and description from dish prop 
    const {name, description} = dish;

    return (
        <div>
            {/* displaying the dish name  */}
            <h2>{name}</h2>
            {/* Displaying the dish description */}
            <p>{description}</p>
        </div>
    );
}

// PropTyoe validation for DishDetails props 

DishDetails.propTypes = {
    dish: PropTypes.shape({
        name: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
    })
}

export default DishDetails;
