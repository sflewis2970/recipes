import { FaTimes } from 'react-icons/fa'

const Recipe = ({ recipe, index, toggleRecipes, onDelete }) => {
  let ingredientsFound = false
  if (recipe.ingredients.length > 0) {
    ingredientsFound = true
  }

  let instructionsFound = false
  if (recipe.instructions.length > 0) {
    instructionsFound = true
  }

  return (
    <div className={"recipe " + (recipe.open ? 'open' : '')} index={index} onClick={() => toggleRecipes(index)}>
			<div className="recipe-title">
        <label>Recipe: </label>

        {recipe.name}{' '} <FaTimes style={{ color: 'red', cursor: 'pointer' }} onClick={() => onDelete(index)}/> 
			</div>

			<div className="recipe-ingredients">
        <label>Ingredients: </label>

        <p>
          {(ingredientsFound) ? recipe.ingredients : 'ingredients not found'}
        </p>
			</div>

			<div className="recipe-instructions">
        <label>Instructions: </label>

        <p>
          {(instructionsFound) ? recipe.instructions : 'instructions not found'}
        </p>
			</div>
    </div>
  )
}

export default Recipe
