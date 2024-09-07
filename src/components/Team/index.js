import Card from "../Card";
import "./Team.css"

const Team = (props) => {
    return (
        (props.peoples.length > 0) ? 
        <section className="team" style={{
            "--team-bg-color" : props.secondColor,
            "--team-after-bg-color" : props.firstColor
        }}>
            <h3>{props.title}</h3>
            <div className="peoples">
                {props.peoples.map(people => <Card key={people.name} name={people.name} backgroundColor={props.firstColor} url_img={people.image} position={people.position}/> )}
            </div>
        </section>
        : ""
    )
}

export default Team;
