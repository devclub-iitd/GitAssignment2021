import { Card, CardImg, CardText, CardBody, CardImgOverlay, CardSubtitle, CardTitle, CardFooter, CardHeader, Collapse} from 'reactstrap';
import React, {useState} from 'react';
import './App.css';

function CardWrapper() {
  const [isOpen, setIsOpen] =useState(false);
  const toggle= () => setIsOpen(!isOpen);

  return (
    <div className="CardWrapper" onClick={toggle}>
      <Collapse isOpen={!isOpen}>
        <Card class="card" inverse>
          <CardImg height="350px" src="/assets/cardImg.png" alt="cardImg" />
          <CardImgOverlay className="overlay">
            <CardTitle tag="h2">Name</CardTitle>
          </CardImgOverlay>
        </Card>
      </Collapse>
      <Collapse isOpen={isOpen}>
        <Card class="card">
          <CardHeader tag="h2">Name</CardHeader>
          <CardBody>
            <CardText tag='h5'>Branch</CardText>
            <CardText tag='h5'>
              About
              <CardSubtitle tag='h6'>Hobbies- I like to binge watch, sports, play musical instrument, dance, etc. Favorite movie/ food.</CardSubtitle>
            </CardText>
          </CardBody>
          <CardFooter tag='h6'>Social media (fb/insta/none...)</CardFooter>
        </Card>
      </Collapse>
    </div>
  );
}

export default CardWrapper;