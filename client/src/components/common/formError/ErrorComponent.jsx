import './ErrorComponent.min.css';

const ErrorComponent = (props) => {

    return (
        <div className="form_error">
            <p>{props.error}</p>
        </div>
    )
}
export default ErrorComponent;