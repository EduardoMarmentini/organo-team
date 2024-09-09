import React, { useState } from 'react';
import Banner from './components/Banner';
import Form from './components/Form';
import Team from './components/Team';
import Footer from './components/Footer';
  
function App() {
  
  const teams = [
    {
      title: "CEOs",
      firstColor: "#FFBA05",
      secondColor: "#FFF5D9"
    },
    {
      title: "Gestores",
      firstColor: "#FF8A29",
      secondColor: "#FFEEDF"
    },
    {
      title: "Desenvolvimento",
      firstColor: "#82CFFA",
      secondColor: "#E8F8FF"
    },
    {
      title: "Marketing (MKT)",
      firstColor: "#DB6EBF",
      secondColor: "#FAE9F5"
    },
    {
      title: "Vendas",
      firstColor: "#A6D157",
      secondColor: "#F0F8E2"
    },
    {
      title: "Contabilidade",
      firstColor: "#E06B69",
      secondColor: "#FDE7E8"
    }
  ];

  const [peoples, setPeople] = useState([]);

  const handleAddPeople = (person) => {
    setPeople([...peoples, person]);
  };
  
  return (
    <div className="App">
      <Banner />
      <Form teams={teams.map(team => team.title)} onAddPeople={handleAddPeople} />
      {teams.map(team => (
        <Team
          key={team.title}
          title={team.title}
          firstColor={team.firstColor}
          secondColor={team.secondColor}
          peoples={peoples.filter(people => people.team === team.title)}
        />
      ))}
      <Footer />  
    </div>
  );
}

export default App;
