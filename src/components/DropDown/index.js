import './DropDown.css'

const DropDown = (props) => {

    return (
        <div className='drop-down'>
            <label> {props.label}</label>
            <select onChange={event => props.onChanged(event.target.value)} required={props.req} value={props.value}>
                {props.itens.map( item => <option key={item}> {item} </option>)}
            </select>
        </div>
    )
}

export default DropDown