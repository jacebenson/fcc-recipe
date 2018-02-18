import React, { Component } from 'react';

import RecipeItem from './RecipeItem.js';

const RecipeList = (props) => {
  var arr = [
    {
      name: 'Sweedish Meatballs',
      prep: '10 minutes',
      cook: '20 minutes',
      serves: '4',
      summary: 'This amazing dish of meaty meatballs served with thick delicious gravy.  Great for dinner and events.',
      ingredients: ['1 pound of beef', '2 gravy pouches', '1 quart of water'],
      instructions: 'First goto the store/nBuy some meat/nBring it home'
    },
    {
      name: 'Spicy Meatballs',
      prep: '10 minutes',
      cook: '20 minutes',
      serves: '4',
      summary: 'This amazing dish of spicy meatballs served with thick delicious gravy.  Great for dinner and events.',
      ingredients: ['1 pound of spicy sausage', '2 gravy pouches', '1 quart of water'],
      instructions: ['First goto the store','Buy some meat','Bring it home']
    },
  ];
  const recipeList = arr.map((recipe) => {
    return <RecipeItem recipe={recipe} /> 
  });
  return (

    <div className="container">
    <table class="table table-hover">
      <thead>
        <tr>
          <th>Recipe</th>
          <th>Summary</th>
          <th>Ingredients</th>
        </tr>
      </thead>
      <tbody>
        {recipeList}
      </tbody>
    </table>  
    </div>
  );
}

export default RecipeList;
