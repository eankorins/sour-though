export type Item = {
  name: string,
  bakers: number,
  grams: number,
  type: "flour" | "other"
}


export type Recipe = {
  name?: string,
  units?: number,
  items?: Item[]
}

const basic: Recipe = {
  name: "Basic",
  units: 1,
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