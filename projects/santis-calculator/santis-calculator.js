const Ingredients = Object.freeze({
  TacoShell: 1,
  ShreddedChicken: 2,
  Toppings: 3,
  TacoMeat: 4,
  Tortillas: 5,
  ShreddedSteak: 6,
  HotSauce: 7,
  RefriedBeans: 8,
  ShreddedCheese: 9,
  MexicanRice: 10,
  TortillaChips: 11,
  Salsa: 12,
  Queso: 13,
  Tequila: 14,
  MargaritaMix: 15,
  StrawberryMix: 16,
  MangoMix: 17,
  ShotGlass: 18,
  EmptyCup: 19,
});

const menuItems = [
  {
    label: 'Beef Hardshell Taco',
    price: 150,
    ingredients: [Ingredients.TacoShell, Ingredients.Toppings, Ingredients.TacoMeat]
  },
]
