import './App.css';
import SearchGif from './components/searchGif';
import React, { useState } from 'react';

function App() {
    // Using React's useState hook to create a state variable and setter for the search term
    const [term, setTerm] = useState('');

    // This function updates the state variable 'term' whenever the input field changes
    const updateTerm = (event) => {
        setTerm(event.target.value);
    }

    return (
        <div>
            <input className="search-input" type="text" placeholder='Search Gif' onChange={updateTerm}></input>
            <SearchGif txt={term} />
        </div>
    );
}

export default App;