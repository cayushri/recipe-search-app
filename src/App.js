import React from 'react';
import {useState, useEffect} from "react";
import './App.css';
import Recipes from './Recipes';

function App() {
  const APP_ID="a187e22e";
  const APP_KEY="fc32dea585b775e8f4a17f1b994841a6";
  
 const [recipes, setRecipes] = useState([]);
 const [search,setSearch] =   useState("");
 const [query,setQuery]= useState("chicken");
    useEffect(() => { getRecipes() } ,[query]);

const getRecipes = async () => { 
const response= await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
const data = await response.json();
 setRecipes(data.hits);
console.log(data.hits);
}

const recipeChange= e => {setSearch(e.target.value)};
const queryRunner= e => {
   e.preventDefault();
   setQuery(search); 
   setSearch("")};


return (
    <div className="App">
       <form onSubmit={queryRunner} className="search-form">
         <input className="search-bar" type="text" value={search} onChange={recipeChange}/>
         <button  className="search-button" type="submit" >Search</button>
       </form>
       <div className="recipes">{recipes.map((recipe)=>(<Recipes key={recipe.recipe.calories} calories={recipe.recipe.calories} title={recipe.recipe.label}  imageClicked={recipe.recipe.shareAs} image={recipe.recipe.image} ingredients={recipe.recipe.ingredients} />))}
       </div>
       </div>
  );
}

export default App;
