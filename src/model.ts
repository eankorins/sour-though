export type Item = {
  name: string,
  bakers: number,
  grams: number,
  type: "flour" | "other"
}


export type Step = {
  name: string,
  description: string,
  notes: string,
  images: [],
  offset: number,
  items: Item[]
}

export type Recipe = {
  name: string,
  units: number,
  steps: Step[]
  items: Item[]
}

const levainStep = {
  name: "Levain",
  description: `
    A levain is a starter made day-of at a ratio between 1:1 to 4:1 Sourdough starter to flour/water.
  `,
  notes: "",
  images: [],
  timeOffset: 0,
   
}

const basic: Recipe = {
  name: "Basic",
  units: 1,
  steps:[],
  items: [
    { name: "Whole Wheat", bakers: 100, grams: 400, type: "flour" },
    { name: "Starter", bakers: 20, grams: 0, type: "other" },
    { name: "Water", bakers: 70, grams: 0, type: "other" },
    { name: "Salt", bakers: 2.2, grams: 0, type: "other" },
  ]
}
const seeded: Recipe = {
  name: "Seeed",
  units: 1,
  steps:[],
  items: [
    { name: "Whole Wheat", bakers: 100, grams: 450, type: "flour" },
    { name: "Flax Seeds", bakers: 5, grams: 50, type: "other" },
    { name: "Sesame Seeds", bakers: 5, grams: 50, type: "other" },
    { name: "Pumpkin Seeds", bakers: 5, grams: 50, type: "other" },
    { name: "Starter", bakers: 20, grams: 0, type: "other" },
    { name: "Water", bakers: 70, grams: 0, type: "other" },
    { name: "Salt", bakers: 2.2, grams: 0, type: "other" },
  ]
}

export const recipes: Recipe[] = [
  basic,
  seeded
]