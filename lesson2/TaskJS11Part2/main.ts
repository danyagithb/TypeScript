interface IRecipe {
    id: number;
    name: string;
    ingredients: string[];
    instructions: string[];
    prepTimeMinutes: number;
    cookTimeMinutes: number;
    servings: number;
    difficulty: string;
    cuisine: string;
    caloriesPerServing: number;
    tags: string[];
    userId: number;
    image: string;
    rating: number;
    reviewCount: number;
    mealType: string[];
}

interface IResponseRecipe {
    recipes: IRecipe[]
}

fetch('https://dummyjson.com/recipes')
    .then((res: Response): Promise<IResponseRecipe> => res.json())
    .then((recipesObject: IResponseRecipe): void => {

        let {recipes} = recipesObject;
        for (const recipe of recipes) {
            let box: HTMLDivElement = document.createElement('div');
            box.classList.add('box')
            let info: HTMLDivElement = document.createElement('div');
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
            `

            let img: HTMLImageElement = document.createElement('img');
            img.classList.add('recipe-image');
            img.src = recipe.image;

            let list: HTMLOListElement = document.createElement('ol');
            list.innerText = 'Ingredients:'
            for (const ingredient of recipe.ingredients) {
                let listItem: HTMLLIElement = document.createElement('li');
                listItem.innerText = ingredient;

                list.appendChild(listItem);
            }

            let instructions: HTMLOListElement = document.createElement('ol');
            instructions.innerText = 'Instructions:'
            for (const instr of recipe.instructions) {
                let instructionItem: HTMLLIElement = document.createElement('li');
                instructionItem.innerText = instr;

                instructions.appendChild(instructionItem);
            }

            box.append(info, img, list, instructions);
            document.body.appendChild(box);

        }

    });
