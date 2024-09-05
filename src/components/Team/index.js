import Card from "../Card";
import "./Team.css"

const Team = (props) => {
    return (
        <section className="team" style={{
            "--team-bg-color" : props.secondColor,
            "--team-after-bg-color" : props.firstColor
        }}>
            <h3>{props.title}</h3>

            <Card name="Eduardo Marmentini" url_img="https://github.com/EduardoMarmentini.png" position="Desenvolvedor Full-Stack"/>
        </section>
    )
}

export default Team;
