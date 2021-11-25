function GroceryItem(props) {
    return(
        <li className="groceries__item">
            <div className="container grocery-container">
                <div className="grocery-info">
                    <h3 className="groceries__item-title">
                        { props.grocery.name }
                    </h3>

                    <p className="groceries__item-quantity">
                        Quantity: <span className="number">{ props.grocery.quantity }</span>
                    </p>

                    <p className="groceries__item-price">
                        ${ props.grocery.price }
                    </p>
                </div>
                
                <div>
                    <i 
                        className="fas fa-trash-alt fa-lg trash-icon" 
                        onClick={ () => props.onDelete(props.id) }
                    ></i>
                </div>
            </div>
        </li>

    );
}

export default GroceryItem;