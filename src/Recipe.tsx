import { Component,  createEffect, createSignal } from 'solid-js';
import { createStore } from "solid-js/store";
import { Recipe } from './model';


const Calculator: Component<{recipe: Recipe}> = (props) => {
  const [unitWeight, setUnitWeight] = createSignal(0);

  const [recipe, setRecipe] = createStore(props.recipe);
  createEffect(() => {
    let totalFlour = recipe.items.filter(i => i.type == 'flour').reduce((acc, item) => acc + item.grams, 0);
    recipe.items.forEach((i, idx) => {
      if(i.type != "flour"){
        let bakers = Math.round(totalFlour * (i.bakers / 100));
        setRecipe('items', [idx], 'grams', bakers);
      }
    });
    
    let unitWeight = recipe.items.reduce((acc, item) => acc + item.grams, 0) / recipe.units;
    setUnitWeight(Math.round(unitWeight));
  })


  return (
    <div>
      
    </div>
  );
};
export default Calculator;

