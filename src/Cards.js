import { Card, CardImg, CardText, CardBody, CardImgOverlay, CardTitle, CardFooter, CardHeader, Collapse} from 'reactstrap';
import React, {useState} from 'react';
import { FRESHERS } from "./Freshers";

function CardFooterDisplay({contact}){
    return(
        <CardFooter>
            {contact.map((account)=>{
                if(account.type==="insta"){
                    return(
                        <a href={account.url} target="_blank" rel="noreferrer">
                            <span className="fa fa-instagram fa-lg insta"></span>
                        </a>
                    );
                }else{
                    return(
                        <a href={account.url} target="_blank" rel="noreferrer">
                            <span className="fa fa-facebook fa-lg fb"></span>
                        </a>
                    );
                }
            })}
        </CardFooter>
    );
}

function CardWrapper({fresher}) {
    const [isOpen, setIsOpen] =useState(false);
    const toggle= () => setIsOpen(!isOpen);
  
    return (
      <div className="CardWrapper col-12 col-sm-6 col-md-4" key={fresher.entryNum} onClick={toggle}>
        <Collapse isOpen={!isOpen}>
          <Card class="card" inverse>
            <CardImg className="cardImg" max-height="350px" src={fresher.image} alt={fresher.name}  />
            <CardImgOverlay className="overlay">
                <CardTitle tag="h2">{fresher.name}</CardTitle>
            </CardImgOverlay>
          </Card>
        </Collapse>
        <Collapse isOpen={isOpen}>
          <Card class="card col-12 col-sm-6 col-md-4" key={fresher.entryNum}>
            <CardHeader tag="h2">{fresher.name}</CardHeader>
            <CardBody>
              <CardText tag='h5'>Branch: {fresher.branch}</CardText>
              <CardText tag='h5'>
                About
                <CardText tag='h6'>{fresher.about}</CardText>
              </CardText>
              {fresher.contact ? <CardFooterDisplay contact={fresher.contact} /> : null}
            </CardBody>
          </Card>
        </Collapse>
      </div>
    );
}

const Cards= () => {
    const freshers= FRESHERS;

    const renderCards= freshers.map((fresher) => {
        return(
            <CardWrapper fresher={fresher} />
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

