import './InputText.css'

const InputText = (props) => {

    const onType = (event) => {
        props.onChanged(event.target.value)
    }

    return (
        <div className="input-text">
            <label>{props.label}</label>
            <input value={props.value} onChange={onType} required={props.req} placeholder={props.placeholder}/>
        </div>
    )
}

export default InputText;