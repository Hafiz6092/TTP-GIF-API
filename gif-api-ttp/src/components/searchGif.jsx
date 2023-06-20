import React, { useEffect, useState } from "react";
import axios from 'axios';
import GifCards from "./giftcard";

const SearchGif = (props) => {
    const [searchRes, setSearchRes] = useState([]);

    useEffect(() => {
        const fetchGifs = async () => {
            let api;
            // If the user has entered a search term, call the search API
           // https://api.giphy.com/v1/gifs/search?api_key=ZRN9GheLBgOvFK5pYUcZlb8Mh6mkC9EA&q=&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips
            if (props.txt) {
                api = 'https://api.giphy.com/v1/gifs/search?api_key=ZRN9GheLBgOvFK5pYUcZlb8Mh6mkC9EA&q=' + props.txt + '&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips';
            } else {
            // If no search term was entered, retrive the trending gifs
                api = 'https://api.giphy.com/v1/gifs/trending?api_key=ZRN9GheLBgOvFK5pYUcZlb8Mh6mkC9EA&limit=25&offset=0&rating=g&bundle=messaging_non_clips';
            }

            try {
                const list = await axios.get(api);
                setSearchRes(list.data.data);
            } catch (error) {
                console.error("" + error);
            }
        }
        fetchGifs();
        // This useEffect is dependent on props.txt. When props.txt changes, the useEffect will run again
    }, [props.txt]);

    return (
        <div className="app-container">
            {searchRes.map((item) => {
                 // For each gif in searchRes, render a GifCards component with the gif as a prop.
                return <GifCards key={item.id} gif={item} />
            })}
            <footer>Made by Ghulam Nabi
                <p>with help of my friend Hamza</p>
            </footer>
            
        </div>
    );
}
 
export default SearchGif;