document.addEventListener('DOMContentLoaded', () => {

const searchForm = document.querySelector('.search_form');
const searchInput = document.getElementById('search_input');
const recipesSection = document.querySelector('.recipe_section');
const recipeDialog = document.getElementById('recipe_dialog');
const closeButton = document.querySelector('.close_btn');
const ingredientsList = document.getElementById('ingredients_list');
const container = document.getElementById('container');
const timeDifficultyFilter = document.getElementById('time_difficulty');
const dietTypeFilter = document.getElementById('diet_type_filter');
const cuisineFilter = document.getElementById('cuisine_filter');
const favoriteButton = document.getElementById('favorite-button');;//show favorites button
const fav_btn=document.querySelector('.fav-btn');// button each card
// Sample Recipe Data
const recipes = [{
    name: "Gulab Jamun",
    image: "https://t3.ftcdn.net/jpg/08/42/48/86/360_F_842488691_jNknbqQn2GSMXFggvtyX3UaVORtBRFSc.jpg",
    description:
      "Gulab Jamun are fried dough balls made from milk solids and semolina are soaked in a syrup flavored with cardamom, rose water, saffron, and cloves.",
    ingredients: ["Milk solids", "Semolina", "Sugar syrup", "Cardamom", "Rose water", "Saffron"],
    difficulty: "moderate",
    time:"50 minutes",
    diet_type:["Vegetarian"],
    cuisine:"Dessert",
    instructions:"Prepare the dough with milk solids and semolina, shape into balls, and fry in ghee until golden. Soak them in warm sugar syrup flavored with cardamom, rose water, and saffron for a few hours.",
    favorite:false
  },
  {
    name: "Rasmalai",
    image: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQ71EAhkLynt3XPTxJVEs7m78B80BZPuq17cHhBhkoRxGd034YEXLx1hhAFVJNMjfj3DbdW5VNRpPLg43V92cWkPVWcM28Qa3OOAEDmyo8",
    description: "Rasmalai consists of soft paneer balls soaked in sweetened, flavored milk.",
    ingredients: ["Paneer", "Milk", "Sugar", "Cardamom", "Pistachios", "Saffron"],
    difficulty: "easy",
    time:"50 minutes",
    diet_type:["Vegetarian"],
    cuisine:"Dessert",
    instructions:"Prepare soft paneer balls, soak them in sugar syrup, then serve them in sweetened, flavored milk with cardamom, saffron, and pistachios.",
    favorite:false
  },
  {
    name: "Dal Makhani",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT69FeaPjtsF4HJ5FnURAZmRg8MhZTWaW9mRg&s",
    description: "Dal Makhani is a popular North Indian dish where whole black lentils & red kidney beans are slow cooked with spices, butter & cream.",
    ingredients: ["Black gram (urad dal)", "Kidney beans", "Butter", "Cream", "Tomatoes", "Ginger", "Garlic", "Green chilies", "Cumin seeds", "Coriander powder", "Turmeric powder", "Garam masala", "Red chili powder", "Salt", "Fenugreek leaves"],
    difficulty: "moderate",
    time:"45 minutes",
    diet_type:["Vegetarian"],
    cuisine:"Indian",
    instructions:"Soak lentils and kidney beans overnight. Cook them with butter, tomatoes, and spices like cumin, coriander, turmeric, red chili powder, and garam masala. Add cream and fenugreek leaves for a rich, creamy texture.",
    favorite:false
  },
  {
    name: "Shahi Paneer",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxhLe8bA85-YHwtPIR5tj04YkyRzQF9GGT5g&s",
    description: "Shahi Paneer also known as Mughlai Paneer is a delicious Indian dish of soft, pillowy paneer served in a creamy, aromatic and rich gravy.",
    ingredients: ["Paneer", "Tomatoes", "Onions", "Cashews", "Cream", "Butter", "Ginger", "Garlic", "Green chilies", "Turmeric", "Red chili powder", "Garam masala", "Coriander powder", "Kasuri methi", "Salt", "Sugar"],
    difficulty: "moderate",
    time:"45 minutes",
    diet_type:["Vegetarian"],
    cuisine:"Indian",
    instructions:"Prepare the paste: Boil 2 chopped onions, 3 tomatoes, 8-10 cashew nuts, and 2 green chilies in water. Cool and blend to a smooth paste.Cook the spices: Heat 2 tbsp butter in a pan. Add 1 bay leaf, 2 cardamom pods, 1-inch cinnamon, and 2 cloves. Sauté until fragrant.Add onion-tomato paste: Pour the blended paste into the pan. Cook on medium heat for 8-10 minutes, stirring occasionally.Spice it up: Add 1 tsp ginger-garlic paste, 1 tsp coriander powder, ½ tsp turmeric, 1 tsp red chili powder, and salt to taste. Cook for 5 minutes.Add cream and paneer: Stir in 3 tbsp fresh cream, 1 tsp sugar, and 1 tsp garam masala. Mix well. Add 250g paneer cubes and cook for 5 minutes on low heat.Finish with kasuri methi: Crush 1 tsp kasuri methi and sprinkle over the dish. Mix and cook for another 2 minutes.Serve: Garnish with fresh cream or chopped coriander and serve hot with naan or rice.",
    favorite:false
  },
  {
    name: "Loaded Cauliflower",
    image: "https://images-prod.healthline.com/hlcmsresource/images/Best-of-Books/3275-keto_califlower_1296x728-body2.jpg",
    description: "Loaded Cauliflower is a delicious low-carb dish made with roasted cauliflower, crispy bacon, melted cheese, and sour cream, topped with fresh chives.",
    ingredients: ["Cauliflower", "Cheddar cheese", "Bacon", "Sour cream", "Green onions", "Garlic powder", "Butter", "Salt", "Black pepper"],
    difficulty: "easy",
    time: "35 minutes",
    diet_type: ["Keto", "Low-Carb","Non-Vegetarian"],
    cuisine: "American",
    instructions: "Preheat oven to 400°F (200°C). Cut cauliflower into florets and toss with melted butter, garlic powder, salt, and black pepper. Spread on a baking sheet and roast for 20 minutes. Remove from oven and top with shredded cheddar cheese and crispy bacon. Bake for another 5 minutes until cheese is melted. Serve with sour cream and chopped green onions.",
    favorite: false
},
{
    name: "Low Carb Sesame Chicken",
    image: "https://images-prod.healthline.com/hlcmsresource/images/Best-of-Books/3275-keto_sesame_1296x728-body3.jpg",
    description: "A healthy low-carb version of sesame chicken, featuring crispy chicken pieces tossed in a flavorful sesame sauce without added sugars.",
    ingredients: ["Chicken breast", "Egg", "Almond flour", "Soy sauce", "Sesame oil", "Garlic", "Ginger", "Rice vinegar", "Erythritol", "Sesame seeds", "Green onions"],
    difficulty: "moderate",
    time: "30 minutes",
    diet_type: ["Keto","Low Carb", "Gluten-Free","Non-Vegetarian"],
    cuisine: "Asian",
    instructions: "Cut the chicken into bite-sized pieces. In a bowl, whisk the egg and dip the chicken in it, then coat with almond flour. Heat sesame oil in a pan and fry the chicken until golden brown. In a separate pan, mix soy sauce, rice vinegar, erythritol, minced garlic, and ginger. Simmer until slightly thickened. Toss the crispy chicken in the sauce and garnish with sesame seeds and chopped green onions. Serve hot.",
    favorite: false
},
{
    name: "Keto Chicken Pot Pie",
    image: "https://images-prod.healthline.com/hlcmsresource/images/Best-of-Books/3275-keto_potpie_1296x728-body6.jpg",
    description: "A delicious low-carb, keto-friendly version of the classic chicken pot pie, featuring a creamy filling with tender chicken and a buttery almond flour crust.",
    ingredients: ["Chicken breast", "Butter", "Almond flour", "Heavy cream", "Chicken broth", "Garlic", "Onion", "Carrots", "Celery", "Cheddar cheese", "Egg", "Baking powder", "Salt", "Pepper", "Thyme"],
    difficulty: "moderate",
    time: "45 minutes",
    diet_type: ["Keto", "Low Carb"],
    cuisine: "American",
    instructions: "Preheat the oven to 375°F (190°C). In a pan, melt butter and sauté garlic, onion, carrots, and celery until soft. Add shredded chicken, heavy cream, chicken broth, salt, pepper, and thyme. Simmer until thickened. In a bowl, mix almond flour, baking powder, egg, cheddar cheese, and butter to form a dough. Roll out the dough and place over the chicken filling in a baking dish. Bake for 20-25 minutes or until golden brown. Serve hot.",
    favorite: false
},
{
    name: "Spaghetti Pasta",
    image: "https://www.archanaskitchen.com/images/archanaskitchen/10-Brands/DelMonte-KidsRecipes/Spaghetti_Pasta_Recipe_In_Creamy_Tomato_Sauce_-_Kids_Recipes_Made_With_Del_Monte-3.jpg",
    description: "A classic Italian dish featuring spaghetti noodles tossed in a rich tomato-based sauce with herbs and Parmesan cheese.",
    ingredients: ["Spaghetti", "Tomato sauce", "Garlic", "Olive oil", "Onion", "Basil", "Oregano", "Parmesan cheese", "Salt", "Pepper"],
    difficulty: "easy",
    time: "30 minutes",
    diet_type: ["Vegetarian"],
    cuisine: "Italian",
    instructions: "Cook spaghetti as per package instructions. In a pan, heat olive oil and sauté garlic and onion. Add tomato sauce, salt, pepper, basil, and oregano. Simmer for 10 minutes. Toss cooked spaghetti in the sauce, mix well, and serve with Parmesan cheese.",
    favorite: false
},
{
    name: "Dosa",
    image: "https://www.daringgourmet.com/wp-content/uploads/2023/06/Dosa-Recipe-3.jpg",
    description: "A South Indian crispy crepe made from fermented rice and urad dal batter, served with chutney and sambar.",
    ingredients: ["Rice", "Urad dal", "Fenugreek seeds", "Salt", "Water", "Oil"],
    difficulty: "hard",
    time: "12 hours (including fermentation)",
    diet_type: ["Vegetarian","Vegan", "Gluten-Free"],
    cuisine: "South Indian",
    instructions: "Soak rice and urad dal with fenugreek seeds for 6 hours. Grind into a smooth batter, add salt, and ferment overnight. Heat a pan, pour a ladle of batter, spread thin, and drizzle oil. Cook until crispy and golden. Serve with chutney and sambar.",
    favorite: false
},
{
    name: "Medu Vada",
    image: "https://www.sharmispassions.com/wp-content/uploads/2011/01/MeduVadai3.jpg",
    description: "A popular South Indian deep-fried savory donut made from urad dal, flavored with spices and herbs.",
    ingredients: ["Urad dal", "Green chilies", "Ginger", "Curry leaves", "Black pepper", "Salt", "Oil"],
    difficulty: "hard",
    time: "8 hours (including soaking)",
    diet_type: ["Vegetarian","Vegan", "Gluten-Free"],
    cuisine: "South Indian",
    instructions: "Soak urad dal for 4-6 hours and grind to a fluffy batter. Add chopped green chilies, ginger, curry leaves, black pepper, and salt. Shape into small donuts and deep-fry until golden brown. Serve hot with coconut chutney and sambar.",
    favorite: false
},
{
    name: "Walnut Brownie",
    image: "https://theobroma.in/cdn/shop/files/WalnutBrownie.jpg?v=1711183450",
    description: "A rich and fudgy chocolate brownie loaded with crunchy walnuts, perfect for dessert lovers.",
    ingredients: ["Dark chocolate", "Butter", "Sugar", "Eggs", "Flour", "Cocoa powder", "Walnuts", "Vanilla extract", "Baking powder", "Salt"],
    difficulty: "easy",
    time: "40 minutes",
    diet_type: ["Vegetarian"],
    cuisine: "Dessert",
    instructions: "Melt dark chocolate and butter together. Whisk in sugar and eggs. Fold in flour, cocoa powder, baking powder, salt, vanilla extract, and chopped walnuts. Pour into a greased baking tray and bake at 350°F (175°C) for 25-30 minutes. Cool, slice, and serve.",
    favorite: false
},
{
    name: "Burrito",
    image: "https://surl.li/krxapp",
    description: "A Mexican-style stuffed tortilla filled with rice, beans, meat, cheese, and flavorful sauces.",
    ingredients: ["Tortilla", "Rice", "Black beans", "Chicken/beef", "Cheese", "Salsa", "Guacamole", "Sour cream", "Lettuce", "Cilantro"],
    difficulty: "easy",
    time: "25 minutes",
    diet_type: ["Non-Vegetarian", "Vegetarian"],
    cuisine: "Mexican",
    instructions: "Warm the tortilla on a pan. Layer cooked rice, black beans, grilled chicken or beef, shredded cheese, salsa, guacamole, and sour cream. Roll the tortilla tightly and serve warm.",
    favorite: false
},
{
    name: "Grilled Chicken with Garlic Butter",
    description: "A flavorful continental dish featuring juicy grilled chicken drizzled with rich garlic butter sauce.",
    image: "https://surl.li/fvwsir",
    ingredients: ["Chicken breast", "Butter", "Garlic", "Lemon juice", "Olive oil", "Parsley", "Salt", "Pepper"],
    difficulty: "easy",
    time: "30 minutes",
    diet_type: ["Non-Vegetarian"],
    cuisine: "Continental",
    instructions: "Marinate chicken with olive oil, lemon juice, salt, and pepper. Grill until cooked through. In a pan, melt butter and sauté garlic. Drizzle garlic butter over grilled chicken and garnish with parsley. Serve hot.",
    favorite: false
},
{
    name: "Peking Duck",
    image: "https://cravinghomecooked.com/wp-content/uploads/2024/02/peking-duck-1-19.jpg",
    description: "Peking Duck is a famous Chinese dish featuring crispy roasted duck served with thin pancakes, hoisin sauce, and scallions.",
    ingredients: ["Duck", "Hoisin sauce", "Soy sauce", "Honey", "Five-spice powder", "Ginger", "Garlic", "Scallions", "Cucumber", "Pancakes", "Salt", "Sesame oil"],
    difficulty: "hard",
    time: "4 hours",
    diet_type: ["Non-Vegetarian"],
    cuisine: "Chinese",
    instructions: "Clean the duck and pat it dry. Coat the skin with a honey and soy sauce glaze, then let it dry for several hours. Roast the duck in an oven until the skin turns crispy. Carve the duck into thin slices and serve with warm pancakes, hoisin sauce, scallions, and cucumber slices.",
    favorite: false
}


  // Add your recipe objects here
];

// Display Recipes
function displayRecipes(filteredRecipes) {
  recipesSection.innerHTML = '';
  filteredRecipes.forEach((recipe, index) => {
    const card = document.createElement('div');
    card.classList.add('recipe_card');
    card.innerHTML = `
      <img src="${recipe.image}" alt="${recipe.name}">
      <h2>${recipe.name}</h2>
      <p>${recipe.description}</p>
      <button class="view_recipe_btn" data-name="${recipe.name}">View Recipe</button>
      <button class="fav-btn" data-name="${recipe.name}" style="color: ${recipe.favorite ? '#ff6666' : 'burlywood'}">
        <i class="fas fa-heart"></i>
      </button>
    `;
    recipesSection.appendChild(card);
  });
}

// Filter Recipes
function filterRecipes() {
    const searchTerm = searchInput.value.toLowerCase();
    const selectedDifficulty = timeDifficultyFilter.value;
    const selectedDietType = dietTypeFilter.value.toLowerCase();
    const selectedCuisine = cuisineFilter.value.toLowerCase();
  
    const filteredRecipes = recipes.filter(recipe => {
      const matchesSearch = recipe.name.toLowerCase().includes(searchTerm) || recipe.ingredients.some(ingredient => ingredient.toLowerCase().includes(searchTerm));
      const matchesDifficulty = selectedDifficulty === 'all' || recipe.difficulty === selectedDifficulty;
      const matchesDietType = selectedDietType === 'all' || recipe.diet_type.map(dt => dt.toLowerCase()).includes(selectedDietType);
      const matchesCuisine =selectedCuisine === 'all' ||(recipe.cuisine && recipe.cuisine.toLowerCase() === selectedCuisine);

      // console.log("Matches Cuisine:", matchesCuisine);

      return matchesSearch && matchesDifficulty && matchesDietType && matchesCuisine;
    });
  
    displayRecipes(filteredRecipes);
  }

// Show Recipe Dialog
function showRecipeDetails(recipeName) {
  const recipe = recipes.find(r => r.name === recipeName);
  if (!recipe) return ; // Ensure recipe exists

  recipeDialog.querySelector('h1').textContent = recipe.name;
  recipeDialog.querySelector('h4:nth-of-type(1)').textContent = `Cuisine: ${recipe.cuisine}`;
  recipeDialog.querySelector('h4:nth-of-type(2)').textContent = `Time: ${recipe.time}`;
  recipeDialog.querySelector('h4:nth-of-type(3)').textContent = `Difficulty: ${recipe.difficulty}`;
  ingredientsList.innerHTML = recipe.ingredients.map(item => `<li>${item}</li>`).join('');
  recipeDialog.querySelector('p').innerHTML = recipe.instructions.replace(/\./g, '.<br>');

  let recipeImage = recipeDialog.querySelector('.recipe-dialog-image');
  if (!recipeImage) {
    recipeImage = document.createElement('img');
    recipeImage.classList.add('recipe-dialog-image');
    recipeDialog.insertBefore(recipeImage, recipeDialog.querySelector('h1'));
  }
  recipeImage.src = recipe.image;
  recipeImage.alt = recipe.name;

  recipeDialog.style.overflowY = 'auto';
  recipeDialog.classList.remove('vanish');
  container.classList.add('blur');
}


function favoriteRecipe(index) {
  recipes[index].favorite = !recipes[index].favorite; // Toggle the favorite status
  updatedisplayedrecipes(); // Update the displayed recipes after the change
}
  

// Event Listeners
searchForm.addEventListener('submit', e => {
  e.preventDefault();
  filterRecipes();
});

recipesSection.addEventListener('click', (event) => {
  if (event.target.classList.contains('view_recipe_btn')) {
    const recipeName = event.target.getAttribute('data-name');
    showRecipeDetails(recipeName);
  }
});

closeButton.addEventListener('click', () => {
  recipeDialog.classList.add('vanish');
  container.classList.remove('blur');
});



cuisineFilter.addEventListener('change',()=>filterRecipes())
timeDifficultyFilter.addEventListener('change',()=>filterRecipes())
dietTypeFilter.addEventListener('change',()=>filterRecipes())

recipesSection.addEventListener('click', (e) => {
  if (e.target.closest('.fav-btn')) {
      const recipeName = e.target.closest('.fav-btn').getAttribute('data-name'); // Get the recipe name
      const index = recipes.findIndex(recipe => recipe.name === recipeName); // Find the index of the recipe
      favoriteRecipe(index); // Call the function to toggle the favorite
      e.target.closest('.fav-btn').style.color = recipes[index].favorite ? '#ff6666' : 'burlywood'; // Update button color
  }
});


let show_favorites=false;

function updatedisplayedrecipes() {
    if (show_favorites) {
        displayRecipes(recipes.filter(recipe => recipe.favorite));
    } else {
      displayRecipes(recipes);
        filterRecipes(); // Ensures filtering is reapplied when favorites toggle is off
    }
}

console.log("show favorites")

favoriteButton.addEventListener('click', (e) => {
    e.stopPropagation();
    show_favorites = !show_favorites;
    console.log("show favorites event listening")
    updatedisplayedrecipes();
});


// Initial Display
displayRecipes(recipes);
})






