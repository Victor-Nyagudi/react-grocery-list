function PrimaryButton(props) {
    return(
        <button 
            type="button" 
            className="btn btn--primary" 
            onClick={ () => props.showForm() }
        >
            Add item
        </button>
    );
}

export default PrimaryButton;