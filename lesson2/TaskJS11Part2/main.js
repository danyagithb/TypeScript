"use strict";
fetch('https://dummyjson.com/recipes')
    .then((res) => res.json())
    .then((recipesObject) => {
    let { recipes } = recipesObject;
    for (const recipe of recipes) {
        let box = document.createElement('div');
        box.classList.add('box');
        let info = document.createElement('div');
        info.innerText = `
                ${recipe.name}
                Prep Time Minutes - ${recipe.prepTimeMinutes}
                Cook Time Minutes - ${recipe.cookTimeMinutes}
                Servings - ${recipe.servings}
                Cuisine - ${recipe.cuisine}
                Calories Per Serving - ${recipe.caloriesPerServing}
                Tag - ${recipe.tags[0]}, ${recipe.tags[1]}
                User Id - ${recipe.userId}
                Rating - ${recipe.rating}
                Review Count - ${recipe.reviewCount}
                Meal Type - ${recipe.mealType[0]}
            `;
        let img = document.createElement('img');
        img.classList.add('recipe-image');
        img.src = recipe.image;
        let list = document.createElement('ol');
        list.innerText = 'Ingredients:';
        for (const ingredient of recipe.ingredients) {
            let listItem = document.createElement('li');
            listItem.innerText = ingredient;
            list.appendChild(listItem);
        }
        let instructions = document.createElement('ol');
        instructions.innerText = 'Instructions:';
        for (const instr of recipe.instructions) {
            let instructionItem = document.createElement('li');
            instructionItem.innerText = instr;
            instructions.appendChild(instructionItem);
        }
        box.append(info, img, list, instructions);
        document.body.appendChild(box);
    }
});
