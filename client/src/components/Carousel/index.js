import React from 'react';

const CreateCarousel = (...props) => {
    // probably will take in user lists or home lists as a prop

    return (
        <div className="container">
            <h2>{props.title}</h2>
            <div className="row flex-nowrap overflow-auto">
            {/* this should grab everything to be shown in carousel */}
            {props.container}
            </div>
        </div>
    )
}

export default CreateCarousel;