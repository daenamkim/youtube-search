import React from 'react';
import ReactDOM from 'react-dom';

const API_KEY = 'AIzaSyDZkJ3CIluXPodrE7m7v_jl_hjvlRK6zEU';

// Create a new component. This component should produce
// same HTML
const App = () => {
  return <div>Hi!</div>;
};

// Take this component's generated HTML and put it
// on the page (in the DOM)
// ReactDOM.render should take DOM element
// ReactDOM.render(App);
ReactDOM.render(<App />, document.querySelector('.container'));
