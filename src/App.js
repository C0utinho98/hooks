import React, { useState, useMemo, useCallback } from 'react';
import Navbar from './components/Navbar';
import {Counter} from './components/Counter';
import {likesCounter} from './service/likesCounter';
import {Button} from './components/Button';
import Repos from './components/Repos';


const SEARCH = "https://api.github.com/search/repositories";


function App() {
  const [totalLikes, setTotalLikes] = useState(0);
  const [dark, setDark] = useState(false);

  const getRepositories = useCallback(() => fetch(`${SEARCH}?q=facebook`), []);

  const likes = useMemo(() => likesCounter(totalLikes), [totalLikes]);

  const theme = useMemo(() =>({
    color: dark ? "#fff" : "#333",
    navbar: dark ? "#1a20c" : "#e5e7eb",
    backgroundColor: dark ? "#333" : "#d8e3e7",
    backgroundColorTotal: dark ? "#687980" : "#f5cebe"
  }), [dark]);


  const toogleDarkMode = () => setDark(prevState => setDark(!prevState));

  return (
    <div style={theme} className="App" >
      <Navbar theme={theme} toogleDarkmode={toogleDarkMode} />
      <Counter likes={likes} theme={theme}/>
      <Repos getRepositories={getRepositories} theme={theme} />
      <Button totalLikes={totalLikes} setTotalLikes={setTotalLikes}/>
    </div>
  );
}

export default App;
