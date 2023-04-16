import { Component, For, createSignal } from 'solid-js';
import Calculator from './Calculator';
import { Recipe, recipes } from './model';
import { createStore } from 'solid-js/store';

const App: Component = () => {
  const [selectedRecipe, setSelectedRecipe] = createStore<Recipe>({items: [], name:"NA", units:1});
  setSelectedRecipe(recipes[0])

  function selectionChanged(e: Event & {
      currentTarget: HTMLSelectElement;
      target: HTMLSelectElement;
  }) {
    setSelectedRecipe(recipes[e.currentTarget.selectedIndex])
  }
  return (
    <div class="bg-slate-900 h-screen w-screen text-stone-400">
      <div class="flex items-center justify-center h-screen">
        <div>
          <select
           class="w-96 justify-center"
           onChange={(e) => selectionChanged(e)}>
            <For each={ recipes }>{(recipe, idx) => 
              <option>{recipe.name}</option>
            }            
            </For>
          </select>
          <Calculator recipe={selectedRecipe}></Calculator>
        </div>
      </div>
    </div>
  );
};

export default App;
