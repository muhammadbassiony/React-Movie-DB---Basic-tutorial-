import React from "react";

import { Image } from "./Thumb.styles";

const Thumb = ({ image, movieId, clickable }) => (
    <div>
        <Image src={image} alt='movie-img'></Image>
    </div>
);

export default Thumb;