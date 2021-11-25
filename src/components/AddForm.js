import React from "react";
import SecondaryButton from "./SecondaryButton";

class AddForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            id: '',
            name: '',
            quantity: '',
            price: '',
            isHighPriority: false
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(e) {
        const target = e.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({  
            [name]: value
        });
    }

    handleSubmit(e) {
        e.preventDefault();

        this.props.onAdd(this.state);
        this.props.hideForm();

        this.setState({ name: '' });
        this.setState({ quantity: '' });
        this.setState({ price: '' });
        this.setState({ isHighPriority: '' });
    }

    render() {
        let classes = 'form__buttons';

        if (this.props.groceriesLength === 0) 
            classes += ' list-empty';

        return(
            <form className="form" onSubmit={ this.handleSubmit } id="addForm" >
                <div className="form__container">
                    <label htmlFor="itemName">Name</label>
                    <input 
                        type="text" 
                        name="name" 
                        id="itemName" 
                        value={ this.state.name }
                        placeholder="e.g. Strickland Chocolate Chip Cookies"
                        onChange={ this.handleInputChange }
                    />
        
                    <label htmlFor="formQuantity">Quantity</label>
                    <input 
                        type="number" 
                        name="quantity" 
                        id="formQuantity" 
                        min="1"
                        step="1"
                        value={ this.state.quantity }
                        onChange={ this.handleInputChange }
                    />
                    
                    <label htmlFor="formQuantity">Price</label>
                    <input 
                        type="number" 
                        name="price" 
                        id="price" 
                        min="0"
                        step=".01"
                        value={ this.state.price }
                        onChange={ this.handleInputChange }
                    />
        
                    <label htmlFor="priority">High Priority</label>
                    <input 
                        type="checkbox" 
                        name="isHighPriority" 
                        id="priority" 
                        value={ this.state.isHighPriority }
                        onChange={ this.handleInputChange }
                    />

                    <div className={ classes }>
                        {
                            this.props.groceriesLength > 0 &&
                            
                            <SecondaryButton hideForm={ this.props.hideForm } />
                        }
                        
                        <input type="submit" value="Submit" className="btn btn--primary form__submit" />
                    </div>
                </div>

            </form>
        );
    }
}

export default AddForm;