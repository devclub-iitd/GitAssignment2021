import React from 'react';
import Card from './CardWrapper';

function Cards() {
    return(
        <div className="container">
            <div className="row row-header">
                <div id="1" className="col-12 col-sm-6 col-md-4">
                    <Card />
                </div>
                <div id="2" className="col-12 col-sm-6 col-md-4">
                    <Card />
                </div>
                <div id="3" className="col-12 col-sm-6 col-md-4">
                    <Card />
                </div>
                <div id="4"className="col-12 col-sm-6 col-md-4">
                    <Card />
                </div>
                <div id="5" className="col-12 col-sm-6 col-md-4">
                    <Card />
                </div>
                <div id="6" className="col-12 col-sm-6 col-md-4">
                    <Card />
                </div>
            </div>
        </div>
    );
}

export default Cards;