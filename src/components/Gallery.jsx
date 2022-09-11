import React from "react"
import GalleryItem from './GalleryItem'

const Gallery =({ data}) => {
const display = data.map((item, i) => (
<GalleryItem item={ item } key={ i } />
    ));
    return(
        <div> 
            { display }
        </div>
    )
}

export default Gallery
