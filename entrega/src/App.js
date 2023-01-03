import './App.css';
import './components/NavBar'
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <ItemListContainer greeting="Hola Mundo"></ItemListContainer>
    </div>
  );
}

export default App;
