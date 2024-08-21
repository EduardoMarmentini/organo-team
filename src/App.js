import Banner from './components/Banner';
import InputText from './components/TextInput';

function App() {
  return (
    <div className="App">
        <Banner />
        <InputText lable="Nome" placeholder = ""/>
        <InputText lable="Cargo"/>
        <InputText lable="Imagem"/>
    </div>
  );
}

export default App;