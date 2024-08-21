import './InputText.css'

const InputText = (props) => {
    console.log(props.label)
    return (
        <div className="input-text">
            <label>{props.label}</label>
            <input placeholder={props.placeholder}/>
        </div>
    )
}

export default InputText;