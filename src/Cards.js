import React from 'react';
import { FRESHERS } from "./Freshers";
import card from './CardWrapper';

const Cards=()=>{
    const freshers= FRESHERS;

    const renderCards= freshers.map((fresher) => {
        return(
            <card fresher={fresher}></card>
        );
    });

    return (
        <div className="container-fluid">
            <div className="row">
                {renderCards}
            </div>
        </div>
    );
}

export default Cards;

