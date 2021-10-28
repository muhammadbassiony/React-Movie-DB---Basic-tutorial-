import React from "react";

import { Image } from "./Thumb.styles";

const Thumb = ({ image, title, movieId, clickable }) => (
    <div>
        <Image src={image} alt='movie-img'></Image>
        <h3>{title}</h3>
    </div>
);

export default Thumb;