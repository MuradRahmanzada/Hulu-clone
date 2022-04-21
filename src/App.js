import React, {useState} from 'react';
import "./App.css";
import Header from "./Components/Header/Header";
import Nav from "./Components/Navbar/Nav";
import Results from "./Components/Results/Results";
import request from './requests';

function App() {

  const [selectedOption, setSelectedOption] = useState(request.fetchTrending)

  return (
    <div className="app">
      <Header />

      <Nav setSelectedOption={setSelectedOption}/>

      <Results selectedOption={selectedOption}/>
    </div>
  );
}

export default App;
