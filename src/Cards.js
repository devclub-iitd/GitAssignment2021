import React, {useState} from 'react';
import { FRESHERS } from "./Freshers";
import { Card, CardImg, CardText, CardBody, CardImgOverlay, CardTitle, CardFooter, CardHeader} from 'reactstrap';

function FresherContact(contact){
    return(
        <CardFooter>
        </CardFooter>
    );
}
const Cards=() => {
    const freshers= FRESHERS;
    const [isOpen, setIsOpen] =useState(false);
    const toggle= () => setIsOpen(!isOpen); 

    const renderCards= freshers.map((fresher) => {
        if (!isOpen) {
            return(
                <div className="CardWrapper col-12 col-sm-6 col-md-4" key="fresher.entryNum" onClick={toggle} >
                    <Card class="card" inverse>
                        <CardImg max-height="350px" src={fresher.image} alt={fresher.name}  />
                        <CardImgOverlay className="overlay">
                            <CardTitle tag="h2">{fresher.name}</CardTitle>
                        </CardImgOverlay>
                    </Card>
                </div>
            );
        } else {
            return(
                <div className="CardWrapper col-12 col-sm-6 col-md-4" key="fresher.entryNum" onClick={toggle} >
                    <Card class="card">
                        <CardHeader tag="h2">{fresher.name}</CardHeader>
                        <CardBody>
                            <CardText tag='h5'>Branch: {fresher.branch}</CardText>
                            <CardText tag='h5'>
                                About
                                <CardText tag='h6'>{fresher.about}</CardText>
                            </CardText>
                            {fresher.contact ? <FresherContact contact={fresher.contact}></FresherContact> : null}
                        </CardBody>
                    </Card>
                </div>
            );
        }
    });

    return (
        <div className="container">
            <div className="row">
                {renderCards}
            </div>
        </div>
    );
}

export default Cards;

