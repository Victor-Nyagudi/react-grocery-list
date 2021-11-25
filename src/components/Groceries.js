import Footer from "./Footer";
import GroceryItems from './GroceryItems';
import Header from "./Header";
import AddForm from "./AddForm";
import React from "react";

class Groceries extends React.Component {
    constructor(props) {
        super(props);

        this.state = { isShowingAddForm: false };
        
        this.showForm = this.showForm.bind(this);
        this.hideForm = this.hideForm.bind(this);
    }

    showForm() {
        this.setState({ isShowingAddForm: true });
    }

    hideForm() {
        this.setState({ isShowingAddForm: false });
    }

    render() {
        const numberOfGroceries = this.props.groceries.length;

        return(
            <section className="groceries container">
                <Header />
                
                {
                    (numberOfGroceries === 0 || this.state.isShowingAddForm === true)
                    
                    ? <AddForm 
                            hideForm={ this.hideForm } 
                            groceriesLength={ numberOfGroceries } 
                            onAdd={ this.props.onAdd }
                        />
                    
                    : <GroceryItems groceries={ this.props.groceries } onDelete={ this.props.onDelete }/>
                }

                <Footer
                    groceriesLength={ numberOfGroceries } 
                    isShowingAddForm={ this.state.isShowingAddForm }
                    showForm={ this.showForm } 
                />
            </section>
        );
    }
}

export default Groceries;