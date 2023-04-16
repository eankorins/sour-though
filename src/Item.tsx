import { Component, For, createSignal } from 'solid-js';
import { createStore } from "solid-js/store"
import { Item } from './model';


const ItemC: Component<{item: Item}> = (props) => {
  const [item, setItem] = createStore(props.item);

  return (
    <div class="w-250">
      <div class='grid grid-cols-4 gap-2 p-2'>
        <div>{item.name}</div>
        <div class="flex gap-2">
          <input 
            class="w-16 text-slate-950"
            type="number" 
            disabled={item.type == "flour"} 
            value={item.bakers} 
            oninput={(e) => setItem({bakers: e.currentTarget.valueAsNumber})}
          />%
        </div>
        <div>
          <input 
          class="w-16 text-slate-950"
            type="number" 
            disabled={item.type != "flour"} 
            value={item.grams} 
            oninput={(e) => setItem({grams: e.currentTarget.valueAsNumber})}
          />
        </div>
      </div>
    </div>
  );
};
export default ItemC;

