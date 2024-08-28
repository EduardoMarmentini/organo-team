import './Form.css'
import InputText from '../TextInput'; 
import DropDown from '../DropDown';
import Button from '../Button';
import { useState } from 'react';

const Form = (props) => {
    const times = [
        "Selecione",
        "CEOs",
        "Gestores",
        "Desenvolvimento",
        "Marketing (MKT)",
        "Vendas",
        "Contabilidade"
    ]

    const [name, setName] = useState('')
    const [position, setPosition] = useState('')
    const [image, setImage] = useState('')
    const [team, setTeam] = useState('')

    const onSave = (event) => {
        event.preventDefault()
        props.onAddPeople({
            name,
            position,
            image,
            team
        })
    }

    return (
        <section className='formulario'>
            <form onSubmit={onSave}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <InputText 
                    req={true} 
                    label="Nome" 
                    placeholder="Digite o nome"
                    value={name}
                    onChanged={val => setName(val)}
                />
                <InputText 
                    req={true} 
                    label="Cargo" 
                    placeholder="Digite o cargo"
                    value={position}
                    onChanged={val => setPosition(val)}
                />
                <InputText 
                    req={true} 
                    label="Imagem" 
                    placeholder="Digite o endereço da imagem"
                    value={image}
                    onChanged={val => setImage(val)}
                />
                <DropDown  
                    req={true} 
                    label="Equipes" 
                    itens={times}
                    value={team}
                    onChanged={val => setTeam(val)}

                />
                <Button>
                    Criar Card
                </Button>
            </form>
        </section>
    )
}

export default Form