import React from 'react'
import style from "./recipes.module.css";

const Recipes= ({calories,title,image,ingredients,imageClicked}) =>
      {
          return  (
            <div className={style.recipes}>
            <h1>Title: {title}</h1>
            <p>Calories:{calories}</p>
            <a href={imageClicked}><img className={style.images} src={image} alt="recipe" /></a>
           Ingredients: <ol>{ingredients.map(ingredients => <li>{ingredients.text}</li>)}</ol>
            
            </div>
        )
    }

export default Recipes;