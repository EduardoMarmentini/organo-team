import { useState } from 'react';
import Banner from './components/Banner';
import Form from './components/Form';

function App() {

  const [peoples, setPeople] = useState([])
  
  console.log(peoples)

  return (
    <div className="App">
        <Banner />
        <Form onAddPeople={people => [setPeople([...peoples, people])]}/>
    </div>
  );
}

export default App;