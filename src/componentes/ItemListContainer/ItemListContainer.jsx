import React from 'react'
import "./ItemListContainer.css"
import ItemList from '../ItemList/ItemList'

const ItemListContainer = ( {greetings} ) => {
    return (
        <div className="fondoContainer container">
            <h2 className="text-center"> {greetings} Nuestras Pociones! </h2>
                <ItemList/>
        </div>
    )
}

export default ItemListContainer
