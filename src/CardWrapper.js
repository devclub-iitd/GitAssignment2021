import './App.css';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';

function CardWrapper() {
  return (
    <div className="CardWrapper">
      <Card class="col-4">
        <CardBody tag="h">
          heyyyy
          <CardTitle tag="h5">name
            <CardSubtitle tag="h6">
              branch
              <CardText>depc</CardText>
              </CardSubtitle>
          </CardTitle>
        </CardBody>
      </Card>
    </div>
  );
}

export default CardWrapper;