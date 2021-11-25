import GroceryItem from "./GroceryItem";

function GroceryItems(props) {
    return(
        <ul className="groceries__items">
            { 
                props.groceries.map((grocery, index) => 
                    <GroceryItem 
                        key={ index }
                        id={ index } 
                        grocery={ grocery }
                        onDelete={ props.onDelete }
                    />    
                ) 
            }
        </ul>
    );
}

export default GroceryItems;