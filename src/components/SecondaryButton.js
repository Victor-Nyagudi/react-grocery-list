function SecondaryButton(props) {
    return(
        <button 
            type="button" 
            className="btn btn--secondary" 
            onClick={ () => props.hideForm() } 
        >
            Back
        </button>
    );
}

export default SecondaryButton;