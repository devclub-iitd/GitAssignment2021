import React from 'react';
import Card from './CardWrapper';

function Cards() {
    return(
        <div className="container">
            <div className="row row-header">
                <div className="col-12 col-sm-6">
                    <Card />
                </div>
                <div className="col-12 col-sm-6">
                    <Card />
                </div>
                <div className="col-12 col-sm-6">
                    <Card />
                </div>
                <div className="col-12 col-sm-6">
                    <Card />
                </div>
                <div className="col-12 col-sm-6">
                    <Card />
                </div>
                <div className="col-12 col-sm-6">
                    <Card />
                </div>
            </div>
        </div>
    );
}

export default Cards;