const data = {
  appetizers: {
    items: [
      {
        name: "Crispy Egg Rolls",
        price: "$4.5",
        description:
          "Silver noodle, dried mushroom, cabbage and carrot served with plum sauce."
      },
      {
        name: "Crispy Tofu",
        price: "$4.5",
        description:
          "Crispy Japanese tofu served with sweet chili sauce and peanut."
      },
      {
        name: "Fresh Rolls",
        price: "Tofu $4.50 Shrimp $6",
        description:
          "Bean spouts, lettuce, cilantro and soft rice noodle wrapped in fresh rice paper served with homemade peanut dipping sauce."
      },
      {
        name: "Crab Puffs",
        price: "$6.5",
        description:
          "Crispy wonton filled with imitation crab meat and cream cheese served with plum sauce."
      },
      {
        name: "Coconut Prawn",
        price: "$7.5",
        description: "Crispy prawn with coconut shaving served with plum sauce."
      },
      {
        name: "Wild Tiger Wings",
        price: "$8.5",
        description:
          "Marinated chicken wing, lightly breaded and fried until golden and crispy."
      },
      {
        name: "Satay Chicken",
        price: "$8.5",
        description:
          "Grilled marinated chicken skewers served with peanut sauce and cucumber sauce."
      },
      {
        name: "Pot Sticker",
        price: "$6",
        description:
          "Fried pork and cabbage dumpling served with ginger soy dipping sauce."
      },
      {
        name: "Golden Triangle",
        price: "$8.5",
        description:
          "Ground chicken and shrimp wrapped in a flour trailla deep-fried."
      },
      {
        name: "Steam Mussels",
        price: "$9",
        description:
          "Steam blue mussels with aromatic lemongrass and set in basil broth."
      },
      {
        name: "Crispy Calamari ",
        price: "$10",
        description: "Crispy calamari served with Siracha cream sauce."
      }
    ]
  },

  // category: {
  //   custom_text: "Srir-Fried and Curry dish served with steamed rice. Substitude Brown Rice $1",
  //   custom_menu: [{ingredient:"Chicken, Vegetable or Tofu", price: "$11"}];
  //   items: [ {name:'',price:'', custom_price:'(add grilled chicken $4)', spice:'', description:''}, {}, ...]
  // },

  soup: {
    custom_text:
      // "Your choice of Chicken, Tofu or Vegetable $8.95 Beef or Pork $10 Shrimp $12 Seafood $14 (Or Customize your soup)",
      "*Customize your soup.",
    custom_menu: [
      { item: "Chicken, Tofu or Vegetable", price: "$8.95" },
      { item: "Beef or Pork", price: "$10" },
      { item: "Shrimp", price: "$12" },
      { item: "Seafood", price: "$14" }
    ],
    items: [
      {
        name: "Tom Yum",
        description:
          "Spicy lemongrass broth soup with kaffir, tomato, mushroom, onion and lime juice."
      },
      {
        name: "Tom Kha",
        description:
          "Galangal, lemongrass, kaffir leaves, mushroom, cabbage, lime juice and coconut milk."
      },
      {
        name: "Shrimp Wonton Soup",
        price: "$8",
        description:
          "Shrimp wonton, shrimp, lettuce and bean sprout in clear broth soup."
      }
    ]
  },
  salad: {
    items: [
      {
        name: "House Salad",
        price: "$7",
        custom_price: "(add grilled chicken $4)",
        description:
          "Crispy tofu, hardboiled egg, lettuce, cucumber, grape tomato, red onion and cilantro served with curry peanut sweet and sour sauce."
      },
      {
        name: "Papaya Salad",
        custom_price: "(add grilled shrimp $4)",
        price: "$8",
        description:
          "Shredded green papaya, Thai chili, green bean, tomato and peanut with spicy lime dressing."
      },
      {
        name: "Glass Noodle Salad",
        price: "$12.95",
        description:
          "Steam glass noodle, ground chicken, shrimp, squid, onion, red onion, mint, cilantro tossed with chili lime juice and sweet chili paste."
      },
      {
        name: "Larb",
        price: "$11.95",
        description:
          "Ground chicken roosted rice powder, red onion, mints, cilantro, tossed with chili lime juice. "
      },
      {
        name: "Beef Salad",
        price: "$12",
        description:
          "Grilled beef sirloin, tomato, cucumber, red onion, bell pepper, mints and cilantro with spicy lime dressing."
      }
    ]
  },
  "stir-fried": {
    custom_text: "*Served with steamed rice. Substitude Brown Rice $1",
    custom_menu: [
      { item: "Chicken, Tofu or Vegetable", price: "$11" },
      { item: "Beef or Pork", price: "$12" },
      { item: "Shrimp", price: "$14" },
      { item: "Seafood", price: "$16" }
    ],
    items: [
      {
        name: "Stir-fried Cashew Nut",
        description:
          "Onion, celery, bell pepper, carrot, and cashew nut in roasted sweet chili sauce"
      },
      {
        name: "Stir-fried Garlic",
        description:
          "Sautéed roasted garlic, onion, mushroom, and cilantro in black pepper sauce over a bed of broccoli."
      },
      {
        name: "Stir-fried Fresh Ginger",
        description: "Fresh ginger, mushroom, onion, carrot, and bell pepper."
      },
      {
        name: "Stir-fried Mixed Vegetable",
        description:
          "Stir-fried mixed vegetables in a work with garlic soy sauce."
      },
      {
        name: "Pra Ram",
        description: "Steamed mixed vegetables topped with house peanut sauce."
      },
      {
        name: "Stir-fried Basil",
        description:
          "Stir-fried ground chicken with bell peppers, green bean, onion and basil."
      },
      {
        name: "Stir-fried Eggplant",
        description:
          "Onion, bell pepper, eggplant, and basil in roasted sweet chili sauce."
      }
    ]
  },
  curries: {
    custom_text: "*Served with steamed rice. Substitude Brown Rice $1",
    custom_menu: [
      { item: "Chicken, Tofu or Vegetable", price: "$11" },
      { item: "Beef or Pork", price: "$12" },
      { item: "Shrimp", price: "$14" },
      { item: "Seafood", price: "$16" }
    ],
    items: [
      {
        name: "Red Curry",
        description:
          "Red curry with coconut milk, bamboo shoot, bell pepper, and basil."
      },
      {
        name: "Green Curry",
        description:
          "Green curry with coconut milk, bamboo shoot, bell pepper, eggplant and basil."
      },
      {
        name: "Yellow Curry",
        description:
          "Yellow curry with coconut milk, potato, onion, carrot and sprinkled with shallots."
      },
      {
        name: "Jungle Curry",
        custom_price: "(No coconut milk)",
        description:
          "Spicy Clear red curry with Thai herbs, fresh vegetables bamboo shoot, mushroom, bell pepper and basil."
      },
      {
        name: "Panang Curry",
        description:
          "A Panang curry with coconut milk, green bean, and bell peppers topped with ground peanut."
      },
      {
        name: "Mussaman Curry",
        description:
          "A mild slow cooked curry made with a blend of spices including nutmeg, cumin and cloves in coconut milk with onion, carrot, potato, and peanuts."
      }
    ]
  },
  noodles: {
    custom_menu: [
      { item: "Chicken, Tofu or Vegetable", price: "$11" },
      { item: "Beef or Pork", price: "$12" },
      { item: "Shrimp", price: "$14" },
      { item: "Seafood", price: "$16" }
    ],
    items: [
      {
        name: "Pad Thai",
        description:
          "Stir-fried wide-size rice in tamarind sauce with egg, bean sprout, and green onion served with chopped peanuts."
      },
      {
        name: "Drunken Noodle",
        description:
          "Stir-fried wide-size rice noodle with Thai chili, egg, bell pepper, broccoli, tomato and basil served with raw bean sprout."
      },
      {
        name: "Pad SEE-IEW",
        description:
          "Stir-fried wide-size rice noodle with egg, carrot, broccoli, and sweet soy sauce."
      },
      {
        name: "Pad Woon-Sen",
        description:
          "Stir-fried bean thread with mushroom, cabbage, onion, celery, carrot, grape tomato, bean sprout and egg."
      },
      {
        name: "Wild Tiger Noodle",
        description:
          "Stir-fried wide-size rice noodle with egg, cabbage, onion, and bean sprout in house soy sauce."
      }
    ]
  },
  "noodles-soup": {
    items: [
      {
        name: "Tom Yum Noodle Soup",
        price: "$12.95",
        description:
          "Rice noodle or egg noodle with ground chicken, squid, shrimp, and mussle, bean sprout topped with chopped peanuts."
      },
      {
        name: "Clear Broth Noodle Soup",
        // price: "$8",
        custom_price: "Chicken or tofu $11, Beef $12",
        description:
          "Clear broth small rice noodle soup with bean sprout, cilantro and green onion."
      },
      {
        name: "Khao Soi",
        // price: "$12.95",
        custom_price: "Chicken or tofu $11, Beef $12",
        description:
          "Egg noodle, shallot, cilantro in curry soup topped with crispy egg noodle."
      }
    ]
  },
  "fried-rice": {
    custom_menu: [
      { item: "Chicken, Tofu or Vegetable", price: "$11" },
      { item: "Beef or Pork", price: "$12" },
      { item: "Shrimp", price: "$14" },
      { item: "Seafood", price: "$16" }
    ],
    items: [
      {
        name: "Traditional Thai Fried Rice",
        description:
          "Stir-fried rice with egg, onion, grape tomato, peas, and carrots."
      },
      {
        name: "Pineapple Fried Rice",
        description:
          "Stir-fried rice with curry powder, egg, pineapple, cashew nut, raisins, onion, grape tomato, pea and carrot."
      },
      {
        name: "Basil Fried Rice",
        description: "Stir-fried rice with egg, bell pepper, onion, and basil."
      }
    ]
  },
  "house-specials": {
    custom_text: "*Served with steamed rice. Substitude Brown Rice $1",
    items: [
      {
        name: "Panang Curry Jumbo Prawn",
        price: "$17",
        description:
          "Grilled jumbo prawn topped with panang curry, bell pepper, green bean and asparagus."
      },
      {
        name: "Volcano Beef ",
        price: "$16",
        description:
          "Stir fried beef sirloin, tomato, onion, asparagus, bell pepper, pineapple, grape tomato in house specials sauce."
      },
      {
        name: "Three flavors Salmon",
        price: "$15",
        description:
          "Pan fried sockeye salmon, topped with three flavor dressing, green bean, onion and bell pepper topped with crispy basil."
      },
      {
        name: "Terriyaki Chicken",
        price: "$13",
        description:
          "Charcoal boiled chicken served with steamed vegtable and rice"
      },
      {
        name: "Crispy Duck Curry",
        price: "$21",
        description:
          "Red curry with half roasted duck, pineapple, bell pepper, grape tomatoes, lychee and basil."
      },
      {
        name: "Pumpkin Curry",
        custom_price: "(Chicken, Pork, Beef or Tofu $13, Grilled shrimp $17)",
        description:
          "Golden pumpkin, lychee, bell pepper and basil inred curry sauce."
      },
      {
        name: "Dungeness Crab Fried Rice",
        price: "$16",
        description:
          "Crab meat, jasmine rice, egg, onion, peas-carrots and grape tomato."
      },
      {
        name: "Lemongrass Chicken",
        price: "$13",
        custom_price: "(Add $1 for pad thai)",
        description:
          "Grilled marinated lemongrass chicken with steamed vegetable and topped with peanut sauce."
      }
    ]
  },
  side: {
    items: [
      {
        name: "Steam Rice",
        price: "$1.5"
      },
      {
        name: "Sticky Rice",
        price: "$2"
      },
      {
        name: "Brown Rice",
        price: "$2"
      },
      {
        name: "Steamed Vegetables",
        price: "$3"
      },
      {
        name: "Steamed Noodles",
        price: "$3"
      },
      {
        name: "Steamed Meat",
        price: "$3"
      },
      {
        name: "Squid or Shrimp",
        price: "$4"
      },
      {
        name: "Peanut Sauce",
        price: "$2"
      }
    ]
  },
  drinks: {
    items: [
      {
        name: "Soda (Refilled)",
        price: "$2"
      },
      {
        name: "Regular Iced Tea (Refilled)",
        price: "$2.50"
      },
      {
        name: "Thai Ice Coffee",
        price: "$3"
      },
      {
        name: "Thai Ice Tea",
        price: "$3"
      },
      {
        name: "Fresh Lime Juice with soda",
        price: "$3"
      },
      {
        name: "Mango Juice",
        price: "$3"
      },
      {
        name: "Coconut Juice",
        price: "$3"
      },
      {
        name: "Orange Juice",
        price: "$3"
      },
      {
        name: "Sparkling Water",
        price: "$3"
      },
      {
        name: "Hot Tea Cup",
        price: "$2"
      },
      {
        name: "Hot Tea Pot",
        price: "$4"
      }
    ]
  },
  desserts: {
    items: [
      {
        name: "Coconut Ice Cream",
        price: "$4"
      },
      {
        name: "Mango Sticky Rice (Seasonal)",
        price: "$6",
        custom_price: "(add ice cream $2)"
      },
      {
        name: "Lava Cake",
        price: "$8"
      },
      {
        name: "A chocolate Mousse",
        price: "$8"
      },
    ]
  }
};

export default data;
