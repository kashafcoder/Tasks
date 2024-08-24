function addRecipe() {
    let recipeName = document.getElementById("name").value;
    let recipeIngredient = document.getElementById("ingredient").value;
    let recipeInstruction = document.getElementById("instruction").value;
  
    let recipeElement = {
      name: recipeName,
      ingredients: recipeIngredient,
      instructions: recipeInstruction,
    };
  
    let recipes = JSON.parse(localStorage.getItem("recipes")) || [];
    recipes.push(recipeElement);
    localStorage.setItem("recipes", JSON.stringify(recipes));
    displayRecipe();
}
  
function deleteRecipe(index) {
    let recipes = JSON.parse(localStorage.getItem("recipes")) || [];
    recipes.splice(index, 1);
    localStorage.setItem("recipes", JSON.stringify(recipes));
    displayRecipe();
}
  
function displayRecipe() {
    let recipes = JSON.parse(localStorage.getItem("recipes")) || [];
    const recipeList = document.getElementById("recipes");
    recipeList.innerHTML = "";
  
    recipes.forEach((recipeElement, index) => {
        let listItem = document.createElement("li");
        listItem.innerHTML = `
            <strong class="name">${recipeElement.name}</strong><br>
            <p>Ingredients: ${recipeElement.ingredients} </p><br>
            <p>Instructions:${recipeElement.instructions} </p> <br>
            <button class="delete" onclick="deleteRecipe(${index})">Delete</button>
        `;
        recipeList.appendChild(listItem);
    });
}

displayRecipe();
