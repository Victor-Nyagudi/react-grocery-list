import PrimaryButton from "./PrimaryButton";

function Footer(props) {
    return(
        <footer className="footer">
            {
                (props.isShowingAddForm === false && props.groceriesLength > 0) &&

                <PrimaryButton 
                    isShowingAddForm={ props.isShowingAddForm } 
                    showForm={ props.showForm } 
                />
            }
        </footer>
    );
}

export default Footer;