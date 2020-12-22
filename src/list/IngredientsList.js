import React, { useContext } from 'react'
import IngredientItem from './IngredientItem'
import { IngredientsListContext } from '../global/IngredientsListContext'
import './List.scss'

function IngredientsList() {
  let { ingredientsList } = useContext(IngredientsListContext)
  return (
    <div className='row ingredients-list'>
      {ingredientsList.map((ingred) => (
        <IngredientItem item={ingred} key={ingred.id} />
      ))}
    </div>
  )
}

export default IngredientsList
