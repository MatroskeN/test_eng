import { useState } from "react";
import "./styles/App.css";
import "./styles/stylesheet.css";
import "./styles/reset.css";
import Header from "./components/Header";
import Filter from "./components/Filter";
import CardsContainer from "./containers/CardsContainer";

function App() {
  const [filteredWord, setFilteredWord] = useState("");

  return (
    <div className="App">
      <Header />
      <Filter setFilteredWord={setFilteredWord} />
      <CardsContainer filteredWord={filteredWord} />
    </div>
  );
}

export default App;
