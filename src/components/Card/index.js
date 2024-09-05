import "./Card.css"

const Card = (props) => {
    return (
        <div className="card">
            <div className="header">
                <img src={props.url_img} alt={props.name}/>
            </div>
            <div className="footer">
                <h4>{props.name}</h4>
                <h5>{props.position}</h5>
            </div>
        </div>
    )
}

export default Card