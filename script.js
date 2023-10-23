const recipes = [
    { name: "Pasta Carbonara", ingredients: ["Spaghetti", "Eggs", "Pancetta", "Parmesan Cheese", "Black Pepper"] },
    { name: "Caesar Salad", ingredients: ["Romaine Lettuce", "Croutons", "Parmesan Cheese", "Caesar Dressing"] },
    { name: "Chocolate Chip Cookies", ingredients: ["Flour", "Butter", "Sugar", "Chocolate Chips", "Baking Soda"] }
];

const recipeList = document.getElementById("recipes");
const recipeDetails = document.getElementById("recipe-details");

function displayRecipeDetails(index) {
    const recipe = recipes[index];
    if (recipe) {
        const ingredientsList = recipe.ingredients.map(ingredient => `<li>${ingredient}</li>`).join('');
        const detailsHTML = `<p><strong>${recipe.name}</strong></p><ul>${ingredientsList}</ul>`;
        recipeDetails.innerHTML = detailsHTML;
    } else {
        recipeDetails.innerHTML = "<p>Select a recipe to see details.</p>";
    }
}

function populateRecipeList() {
    for (let i = 0; i < recipes.length; i++) {
        const listItem = document.createElement("li");
        listItem.textContent = recipes[i].name;
        listItem.addEventListener("click", () => displayRecipeDetails(i));
        recipeList.appendChild(listItem);
    }
}

populateRecipeList();
displayRecipeDetails(0);
