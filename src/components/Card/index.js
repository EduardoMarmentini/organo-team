import "./Card.css"

const Card = ({name, url_img, position, backgroundColor}) => {
    return (
        <div className="card">
            <div className="header" style={{
                "--team-bg-color": backgroundColor
            }}>
                <img src={url_img} alt={name}/>
            </div>
            <div className="data">
                <h4>{name}</h4>
                <h5>{position}</h5>
            </div>
        </div>
    )
}

export default Card