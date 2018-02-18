import React, { Component } from 'react';

import Ingredient from './Ingredient.js';

const Recipe = ({recipe}) => {

  const ingredients = recipe.ingredients.map((ingredient) => {
    return <Ingredient ingredient={ingredient} /> 
  });
  return (
    <tr>
      <th scope="row">{recipe.name}</th>
      <td>
        <div>{recipe.summary}</div>
      </td>
      <td>{ingredients}</td>
    </tr>
  );
}

export default Recipe;
