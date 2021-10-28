import React from "react";
import { Link } from "react-router-dom";

import { Image } from "./Thumb.styles";

const Thumb = ({ image, title, movieId, clickable }) => (
    <div>
        {
            clickable ? (<Link to={`/${movieId}`}>
                <Image src={image} alt='movie-img'></Image>
            </Link>) : (<Image src={image} alt='movie-img'></Image>)
        }
        
        <h3>{title}</h3>
    </div>
);

export default Thumb;