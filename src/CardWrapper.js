import { Card, CardImg, CardText, CardBody, CardImgOverlay, CardTitle, CardFooter, CardHeader, Collapse} from 'reactstrap';
import React, {useState} from 'react';
import './App.css';

function CardWrapper({fresher}) {
  const [isOpen, setIsOpen] =useState(false);
  const toggle= () => setIsOpen(!isOpen);

  return (
    <div className="CardWrapper col-12 col-sm-6 col-md-4" key={fresher.entryNum} onClick={toggle}>
      <Collapse isOpen={!isOpen}>
        <Card class="card" inverse>
          <CardImg max-height="350px" src={fresher.image} alt={fresher.name}  />
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
            {fresher.contact ? <CardFooter></CardFooter> : null}
          </CardBody>
        </Card>
      </Collapse>
    </div>
  );
}

export default CardWrapper;