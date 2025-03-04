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
name1:"Madl",
name2:"Moti",
name3:"Poori"
}



function App() {
  return (
    <div className="App">
      <Apple/>
      <Fruits/>
      <React/>
      <Student/>
      <Info/>
      <One name="Prajna"/>
      <Two name="Yashoda"/>
      <Three name="Padmanabha"/>
      <One name={person.name1}/>    // fetch the name with help of object.
      <One name={person.name2}/>
      <One name={person.name3}/>


    </div>
  );
}

export default App;
