import { BlogPost } from "../types";

export const BLOGS: BlogPost[] = [
  {
    id: "1",
    slug: "how-to-prepare-a-delicious-gluten-free-sushi",
    title: "How to prepare a delicious gluten free sushi",
    date: "2023-01-03",
    coverImage: "/assets/blog12.png",
    tags: ["sushi", "gluten-free", "recipes"],
    sections: [
      {
        heading: "What do you need to prepare gluten free sushi?",
        intro:
          "Great sushi is all about simple ingredients, sharp technique, and clean flavors. Here are the key steps to nail it at home.",
        tips: [
          {
            label: "Sushi Rice",
            text: "Use short-grain rice, rinse well, and season with rice vinegar, sugar, and salt for the classic balance.",
          },
          {
            label: "Fresh Fillings",
            text: "Pick high-quality fish or cooked proteins, and crisp veggies for texture (cucumber, avocado, carrot).",
          },
          {
            label: "Gluten-Free Seasoning",
            text: "Use gluten-free soy sauce (tamari) and check labels on wasabi/ginger to avoid hidden gluten.",
          },
          {
            label: "Gentle Rolling",
            text: "Roll firmly but not too tight—keep the fillings centered and use a bamboo mat for clean shape.",
          },
          {
            label: "Clean Cutting",
            text: "Use a very sharp knife and wipe between cuts to keep slices neat and prevent tearing.",
          },
        ],
      },
      {
        heading: "What ingredients make it taste amazing?",
        intro:
          "The best sushi comes from freshness and balance—salt, acid, and texture working together.",
        tips: [
          {
            label: "Nori Sheets",
            text: "Choose crisp nori and keep it dry until rolling.",
          },
          {
            label: "Rice Vinegar",
            text: "Adds brightness—don’t skip it, and mix while rice is warm.",
          },
          {
            label: "Tamari",
            text: "Gives umami without gluten—great for dipping and marinades.",
          },
          {
            label: "Sesame & Scallions",
            text: "Small toppings add aroma and extra crunch.",
          },
          {
            label: "Pickled Ginger",
            text: "Cleans the palate between bites and lifts flavors.",
          },
        ],
      },
    ],
  },

  {
    id: "2",
    slug: "exclusive-baking-lessons-from-the-pastry-king",
    title: "Exclusive baking lessons from the pastry king",
    date: "2023-01-03",
    coverImage: "/assets/blog1.png",
    tags: ["baking", "pastry", "tips"],
    sections: [
      {
        heading: "What do you need for bakery-level pastry at home?",
        intro:
          "Pastry is precision + patience. Control temperature, measure accurately, and practice the basics.",
        tips: [
          {
            label: "Accurate Measuring",
            text: "Use a kitchen scale; grams beat cups for consistency.",
          },
          {
            label: "Cold Butter Control",
            text: "Keep butter cold for flaky layers—warm butter = greasy dough.",
          },
          {
            label: "Proper Mixing",
            text: "Mix just enough; overmixing develops gluten and toughens pastry.",
          },
          {
            label: "Oven Temperature",
            text: "Preheat fully and use an oven thermometer—heat accuracy matters.",
          },
          {
            label: "Resting Time",
            text: "Let dough rest in the fridge so it relaxes and bakes evenly.",
          },
        ],
      },
      {
        heading: "What ingredients make pastry taste premium?",
        intro:
          "Quality ingredients do the heavy lifting. Upgrade a few basics and your results jump instantly.",
        tips: [
          {
            label: "Good Butter",
            text: "Higher-fat butter improves flavor and lamination.",
          },
          {
            label: "Fresh Vanilla",
            text: "Use vanilla extract/paste for cleaner aroma.",
          },
          {
            label: "Fine Sugar",
            text: "Dissolves better and gives smoother textures in creams.",
          },
          {
            label: "Quality Flour",
            text: "Pick the right protein level for the pastry you’re making.",
          },
          {
            label: "Fresh Yeast",
            text: "For enriched doughs, fresh yeast performance is noticeably better.",
          },
        ],
      },
    ],
  },

  {
    id: "3",
    slug: "how-to-prepare-the-perfect-fries-in-an-air-fryer",
    title: "How to prepare the perfect fries in an air fryer",
    date: "2023-01-03",
    coverImage: "/assets/blog2.png",
    tags: ["air-fryer", "fries", "snacks"],
    sections: [
      {
        heading: "What do you need for perfect air fryer fries?",
        intro:
          "Air fryer fries can be super crispy—if you manage moisture, oil, and airflow correctly.",
        tips: [
          {
            label: "Right Potatoes",
            text: "Use starchy potatoes (like russets) for crispier edges.",
          },
          {
            label: "Soak to Remove Starch",
            text: "Soak cut fries in cold water 20–30 minutes, then drain.",
          },
          {
            label: "Dry Thoroughly",
            text: "Pat very dry—water is the enemy of crisp.",
          },
          {
            label: "Light Oil Coat",
            text: "Use a small amount of oil to help browning; don’t drench.",
          },
          {
            label: "Shake & Don’t Overcrowd",
            text: "Cook in batches and shake halfway to crisp evenly.",
          },
        ],
      },
      {
        heading: "What seasonings make them addictive?",
        intro:
          "Season right after cooking so spices stick, and balance salt with a little acid or heat.",
        tips: [
          {
            label: "Fine Salt",
            text: "Season immediately after cooking for best adhesion.",
          },
          {
            label: "Paprika",
            text: "Adds color and a smoky vibe without being overpowering.",
          },
          {
            label: "Garlic Powder",
            text: "Gives savory punch (better than raw garlic on fries).",
          },
          {
            label: "Parmesan",
            text: "A little grated parm adds umami and richness.",
          },
          {
            label: "Lemon Zest",
            text: "Brightens and cuts through oiliness—game changer.",
          },
        ],
      },
    ],
  },

  {
    id: "4",
    slug: "how-to-prepare-delicious-chicken-tenders",
    title: "How to prepare delicious chicken tenders",
    date: "2023-01-03",
    coverImage: "/assets/blog3.png",
    tags: ["chicken", "crispy", "recipes"],
    sections: [
      {
        heading: "What do you need to make juicy chicken tenders?",
        intro:
          "Crispy outside, juicy inside—focus on seasoning, coating, oil temperature, and resting.",
        tips: [
          {
            label: "Quick Brine",
            text: "Salted buttermilk or salted water 20–60 minutes boosts juiciness.",
          },
          {
            label: "Season Every Layer",
            text: "Season chicken + flour/breading so flavor isn’t only on the surface.",
          },
          {
            label: "Double Coating",
            text: "Flour → egg/buttermilk → crumbs for extra crunch.",
          },
          {
            label: "Correct Heat",
            text: "Keep oil around 170–180°C; low heat makes them greasy.",
          },
          {
            label: "Rest After Frying",
            text: "Let them rest on a rack so crust stays crisp.",
          },
        ],
      },
      {
        heading: "What ingredients make the coating extra crispy?",
        intro:
          "Crunch comes from texture. Use a mix that creates airy, jagged surfaces.",
        tips: [
          { label: "Panko Crumbs", text: "Bigger flakes = crunchier crust." },
          {
            label: "Cornstarch",
            text: "Mix into flour for a lighter, crispier bite.",
          },
          { label: "Buttermilk", text: "Helps coating stick and adds tang." },
          {
            label: "Spices",
            text: "Paprika + black pepper + garlic powder is a strong base.",
          },
          {
            label: "Baking Powder",
            text: "A tiny pinch can help with crispiness in some batters.",
          },
        ],
      },
    ],
  },

  {
    id: "5",
    slug: "5-great-cooking-gadgets-you-can-buy-to-save-time",
    title: "5 great cooking gadgets you can buy to save time",
    date: "2023-01-03",
    coverImage: "/assets/blog4.png",
    tags: ["gadgets", "kitchen", "productivity"],
    sections: [
      {
        heading: "How do you pick cooking gadgets that actually save time?",
        intro:
          "The best gadgets reduce prep, speed up cooking, and are easy to clean—otherwise they become drawer clutter.",
        tips: [
          {
            label: "Solve One Pain Point",
            text: "Buy for a specific problem (chopping, blending, measuring), not hype.",
          },
          {
            label: "Easy Cleaning",
            text: "If it’s hard to clean, you won’t use it twice.",
          },
          {
            label: "Multi-Use",
            text: "Tools that do 2–3 jobs beat single-purpose items.",
          },
          {
            label: "Durability",
            text: "Go for sturdy materials; cheap plastic breaks fast.",
          },
          {
            label: "Storage Friendly",
            text: "If it’s bulky, it needs a real reason to live in your kitchen.",
          },
        ],
      },
      {
        heading: "What are 5 solid starter gadgets to own?",
        intro:
          "A small set of reliable basics can speed up 80% of daily cooking tasks.",
        tips: [
          {
            label: "Digital Scale",
            text: "Faster, more accurate measuring for baking and meal prep.",
          },
          {
            label: "Food Processor",
            text: "Chops, slices, and shreds in seconds.",
          },
          {
            label: "Instant-Read Thermometer",
            text: "No guessing—perfect chicken, steak, and baking temps.",
          },
          {
            label: "Microplane",
            text: "Quick zesting, grating garlic/ginger/cheese.",
          },
          {
            label: "Silicone Spatula",
            text: "Scrapes clean, mixes well, and survives heat.",
          },
        ],
      },
    ],
  },

  {
    id: "6",
    slug: "the-secret-tips-tricks-to-prepare-a-perfect-burger",
    title: "The secret tips & tricks to prepare a perfect burger",
    date: "2023-01-03",
    coverImage: "/assets/blog5.png",
    tags: ["burger", "grilling", "tips"],
    sections: [
      {
        heading: "What do you need to prepare a home-made burger?",
        intro:
          "Creating the perfect burger is an art, combining ingredients, techniques, and passion. Today, we’ll unveil some closely guarded secrets and insider tips for mastering this beloved staple.",
        tips: [
          {
            label: "Quality Beef",
            text: "The heart of a perfect burger is top-notch beef. Opt for fresh, high-quality ground beef with a fat content of about 20% for the juiciest results.",
          },
          {
            label: "Seasoning",
            text: "Simplicity is key. A generous pinch of salt and black pepper just before cooking enhances the beef’s natural flavors.",
          },
          {
            label: "Don’t Overwork the Meat",
            text: "Be gentle when forming patties. Overworking leads to dense, tough burgers—shape just enough to hold together.",
          },
          {
            label: "Cooking",
            text: "High heat is crucial. Whether grilling or pan-searing, get a good crust to seal in juices.",
          },
          {
            label: "Resting",
            text: "Let burgers rest a few minutes before serving so juices redistribute for a moist bite.",
          },
        ],
      },
      {
        heading: "What are the right ingredients to make it delicious?",
        intro:
          "A great burger is balanced: juicy patty, soft bun, bright toppings, and a sauce that ties it all together.",
        tips: [
          {
            label: "Buns",
            text: "Soft buns that toast well (brioche or potato buns) hold sauce without falling apart.",
          },
          {
            label: "Cheese",
            text: "Melt-friendly cheese like cheddar or American gives the classic creamy layer.",
          },
          {
            label: "Acid",
            text: "Pickles or a splash of vinegar in sauce cuts richness and boosts flavor.",
          },
          {
            label: "Crunch",
            text: "Lettuce/onion add texture contrast so every bite feels lively.",
          },
          {
            label: "Sauce",
            text: "A simple mayo + mustard + ketchup base (plus spices) makes everything taste cohesive.",
          },
        ],
      },
    ],
  },

  {
    id: "7",
    slug: "7-delicious-cheesecake-recipes-you-can-prepare",
    title: "7 delicious cheesecake recipes you can prepare",
    date: "2023-01-03",
    coverImage: "/assets/blog6.png",
    tags: ["dessert", "cheesecake", "baking"],
    sections: [
      {
        heading: "What do you need for a perfect cheesecake?",
        intro:
          "Cheesecake success is about texture control: smooth batter, gentle baking, and patient chilling.",
        tips: [
          {
            label: "Room-Temp Ingredients",
            text: "Warm cream cheese + eggs blend smoother with fewer lumps.",
          },
          {
            label: "Don’t Overmix",
            text: "Overmixing adds air and can cause cracks—mix just until combined.",
          },
          {
            label: "Gentle Baking",
            text: "Lower, steadier heat prevents curdling and keeps it creamy.",
          },
          {
            label: "Water Bath (Optional)",
            text: "Helps even baking and reduces cracking, especially for tall cakes.",
          },
          {
            label: "Chill Properly",
            text: "Chill 6+ hours (overnight best) to fully set and develop flavor.",
          },
        ],
      },
      {
        heading: "What ingredients make cheesecake taste next-level?",
        intro:
          "Small upgrades (vanilla, citrus, and crust texture) make a big difference.",
        tips: [
          {
            label: "Real Vanilla",
            text: "Use extract/paste for deeper aroma.",
          },
          {
            label: "Citrus Zest",
            text: "Lemon/orange zest brightens heavy dairy flavors.",
          },
          {
            label: "Good Cream Cheese",
            text: "Full-fat cream cheese yields the richest texture.",
          },
          {
            label: "Crust Texture",
            text: "Mix crumbs with butter + a pinch of salt for balance.",
          },
          {
            label: "Topping Contrast",
            text: "Berries or caramel add acidity/sweetness contrast.",
          },
        ],
      },
    ],
  },

  {
    id: "8",
    slug: "5-great-pizza-restaurants-you-should-visit-this-city",
    title: "5 great pizza restaurants you should visit this city",
    date: "2023-01-03",
    coverImage: "/assets/blog7.png",
    tags: ["pizza", "restaurants", "travel"],
    sections: [
      {
        heading: "How do you choose pizza restaurants worth visiting?",
        intro:
          "The best pizza spots balance dough, heat, toppings, and consistency—plus the vibe matters.",
        tips: [
          {
            label: "Dough Quality",
            text: "Look for long fermentation—better flavor and lighter crust.",
          },
          {
            label: "Oven Style",
            text: "Wood-fired or very hot ovens usually deliver better char and texture.",
          },
          {
            label: "Ingredient Freshness",
            text: "Great sauce and cheese quality show immediately in taste.",
          },
          {
            label: "Local Reputation",
            text: "Check recent reviews and locals’ favorites—not just viral spots.",
          },
          {
            label: "Consistency",
            text: "A top spot is great on a busy night too, not only on quiet days.",
          },
        ],
      },
      {
        heading: "What should you order to judge a place fast?",
        intro:
          "Try the classics first—if they nail the basics, the specialties will usually be strong too.",
        tips: [
          {
            label: "Margherita",
            text: "Perfect for judging dough, sauce, and cheese balance.",
          },
          {
            label: "Pepperoni",
            text: "Tests crisping, oil handling, and heat control.",
          },
          {
            label: "House Special",
            text: "Shows their creativity and ingredient sourcing.",
          },
          {
            label: "One Vegetarian",
            text: "Reveals whether they can build flavor without meat.",
          },
          {
            label: "Simple Side",
            text: "Garlic knots or salad show kitchen discipline beyond pizza.",
          },
        ],
      },
    ],
  },

  // duplicates from the grid (different images) — kept as separate items
  {
    id: "9",
    slug: "5-great-cooking-gadgets-you-can-buy-to-save-time-2",
    title: "5 great cooking gadgets you can buy to save time",
    date: "2023-01-03",
    coverImage: "/assets/blog8.png",
    tags: ["gadgets", "kitchen", "productivity"],
    sections: [
      {
        heading: "How do you pick cooking gadgets that actually save time?",
        intro:
          "Choose tools that reduce steps and cleanup—time saving isn’t just speed, it’s less mess too.",
        tips: [
          {
            label: "Fewer Steps",
            text: "Pick gadgets that combine tasks (chop + slice + shred).",
          },
          {
            label: "Fast Setup",
            text: "If setup takes 10 minutes, it won’t save time.",
          },
          {
            label: "One-Hand Use",
            text: "Simple ergonomics matter during prep.",
          },
          {
            label: "Dishwasher Safe",
            text: "Cleanup friction kills consistency.",
          },
          {
            label: "Reliable Brand",
            text: "Warranties and spare parts are underrated.",
          },
        ],
      },
      {
        heading: "What are 5 time-saver gadgets most people actually use?",
        intro:
          "These tend to earn their spot because they show up in daily cooking routines.",
        tips: [
          {
            label: "Electric Kettle",
            text: "Boils water fast for pasta, tea, and quick blanching.",
          },
          {
            label: "Immersion Blender",
            text: "Soups, sauces, smoothies—no big blender cleanup.",
          },
          {
            label: "Mandoline (Safe One)",
            text: "Ultra-fast slicing (use the guard!).",
          },
          {
            label: "Nonstick Sheet Pan",
            text: "Roasting with minimal sticking and easy cleanup.",
          },
          {
            label: "Timer + Clip",
            text: "Stupid simple, but prevents overcooking constantly.",
          },
        ],
      },
    ],
  },

  {
    id: "10",
    slug: "how-to-prepare-a-delicious-gluten-free-sushi-2",
    title: "How to prepare a delicious gluten free sushi",
    date: "2023-01-03",
    coverImage: "/assets/blog9.png",
    tags: ["sushi", "gluten-free", "recipes"],
    sections: [
      {
        heading: "What do you need to prepare gluten free sushi?",
        intro:
          "Keep it fresh, keep it clean, and keep the rice perfect—everything else is details.",
        tips: [
          {
            label: "Rinse the Rice",
            text: "Rinse until water runs mostly clear for better texture.",
          },
          {
            label: "Season While Warm",
            text: "Mix vinegar seasoning gently while rice is warm to absorb flavor.",
          },
          {
            label: "Prep Mise en Place",
            text: "Cut everything first—sushi assembly is fast.",
          },
          {
            label: "Use a Mat",
            text: "A bamboo mat makes consistent rolls, even for beginners.",
          },
          {
            label: "Taste Balance",
            text: "Add crunch + creaminess + a little acid in each roll.",
          },
        ],
      },
      {
        heading: "What ingredients improve flavor and texture?",
        intro: "A few extras make homemade sushi feel restaurant-level.",
        tips: [
          {
            label: "Avocado",
            text: "Adds creaminess and balances salty dips.",
          },
          { label: "Cucumber", text: "Fresh crunch that lightens the bite." },
          {
            label: "Spicy Mayo",
            text: "Easy sauce upgrade (mayo + sriracha + lemon).",
          },
          { label: "Toasted Sesame", text: "Adds nutty aroma and texture." },
          {
            label: "Furikake",
            text: "Sprinkle for instant umami and visual pop.",
          },
        ],
      },
    ],
  },

  {
    id: "11",
    slug: "top-20-simple-and-quick-desserts-for-kids",
    title: "Top 20 simple and quick desserts for kids",
    date: "2023-01-03",
    coverImage: "/assets/blog10.png",
    tags: ["dessert", "kids", "quick"],
    sections: [
      {
        heading: "How do you make quick desserts kids will love?",
        intro:
          "Keep it fun, fast, and safe: simple steps, familiar flavors, and optional healthier swaps.",
        tips: [
          {
            label: "5–15 Minute Goal",
            text: "Pick recipes with minimal bake time or no-bake options.",
          },
          {
            label: "Low-Mess Prep",
            text: "Sheet-pan and bowl desserts reduce cleanup stress.",
          },
          {
            label: "Allergy Awareness",
            text: "Have nut-free and dairy-free swaps ready if needed.",
          },
          {
            label: "Make It Interactive",
            text: "Let kids decorate—toppings = instant excitement.",
          },
          {
            label: "Small Portions",
            text: "Mini cups/bites are easier and reduce waste.",
          },
        ],
      },
      {
        heading: "What pantry ingredients should you always have?",
        intro: "A small “dessert drawer” makes quick treats possible anytime.",
        tips: [
          {
            label: "Cocoa + Chocolate Chips",
            text: "Works for mug cakes, cookies, and quick melts.",
          },
          {
            label: "Honey or Maple Syrup",
            text: "Fast sweetener for yogurt bowls and fruit dips.",
          },
          { label: "Vanilla", text: "Tiny amount boosts nearly everything." },
          {
            label: "Fruit (Fresh/Frozen)",
            text: "Instant topping or smoothie base.",
          },
          {
            label: "Yogurt or Cream",
            text: "Base for parfaits and dips in minutes.",
          },
        ],
      },
    ],
  },

  {
    id: "12",
    slug: "top-20-simple-and-quick-desserts-for-kids-2",
    title: "Top 20 simple and quick desserts for kids",
    date: "2023-01-03",
    coverImage: "/assets/blog11.png",
    tags: ["dessert", "kids", "quick"],
    sections: [
      {
        heading: "How do you keep kids desserts simple and quick?",
        intro:
          "Simple formulas win: base + topping + crunch. Mix and match without overthinking.",
        tips: [
          {
            label: "Use a Base",
            text: "Yogurt, pudding, or whipped cream creates instant structure.",
          },
          {
            label: "Add Fruit",
            text: "Berries/banana/apple keep it fresh and naturally sweet.",
          },
          {
            label: "Add Crunch",
            text: "Granola, crushed cookies, or cereal adds fun texture.",
          },
          {
            label: "One-Bowl Rule",
            text: "Prefer recipes that stay in one bowl for speed.",
          },
          {
            label: "Batch Small",
            text: "Prep mini portions ahead for grab-and-go.",
          },
        ],
      },
      {
        heading: "What flavors always work for kids?",
        intro: "Stick to familiar combos, then add tiny twists for variety.",
        tips: [
          {
            label: "Chocolate + Banana",
            text: "Classic combo for smoothies, parfaits, and bites.",
          },
          { label: "Strawberry + Vanilla", text: "Simple and crowd-pleasing." },
          {
            label: "Peanut Butter + Honey",
            text: "Works great (or sunflower butter as a swap).",
          },
          {
            label: "Cinnamon + Apple",
            text: "Warm, cozy flavor with minimal effort.",
          },
          {
            label: "Caramel + Salt",
            text: "A little salt makes sweet taste richer.",
          },
        ],
      },
    ],
  },
];
