import React from 'react';
import { FRESHERS } from "./Freshers";
import cardA from './CardWrapper';

const Cards=()=>{
    const freshers= FRESHERS;

    const renderCards= freshers.map((fresher) => {
        <cardA fresher={fresher}></cardA>
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

