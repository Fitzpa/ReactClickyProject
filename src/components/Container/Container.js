import React from 'react';
import './Container.css';
import Character from '../Character';

// main container for each Character component
// loops through each index in props.characters, which contains an array of character images
// to create a new Character component for each image
// attaches the passed down clickEvent function to each Character component
const Container = props => (
  // loops through
  <div
    className={
      props.shake
        ? 'container grid-contain justify-content-center shake'
        : 'container grid-contain justify-content-center'
    }
  >
    {props.characters.map((a, i) => <Character name={a} key={i} clickEvent={props.clickEvent} />)}
  </div>
);

export default Container;
