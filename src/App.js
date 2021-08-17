import './styles/App.css';
import './styles/stylesheet.css'
import './styles/reset.css'
import Header from "./components/Header";
import Filter from "./components/Filter";
import Cards from "./components/Cards";

function App() {
    return (
        <div className="App">
            <Header/>
            <Filter/>
            <Cards/>
        </div>
    );
}

export default App;
