import logo from './logo.svg';
import './App.css';
import Apple from './Apple';
import Fruits from './Fruits';
import React from './ReactEx1';
import Student from './Student';
import './Apple.css';
import Info from './ReactEx2';
import One from './Demo/One';
import Two from './Demo/Two';
import Three from './Demo/Three';

const person={
name:"prajna Poojari",
age:21,
branch:"BCA"
}

function App() {
  return (
    <div className="App">
      <Two />
      <Three/>
      <One name={person}/>


    </div>
  );
}

export default App;
