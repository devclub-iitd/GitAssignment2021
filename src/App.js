import './App.css';
import Card from './CardWrapper.js';
import NavBar from './NavBar.js';
import { Container, Row, Col } from 'reactstrap';

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <div>
        <Container>
          <Row>
            <Col sm="6" md="4" lg="3"><Card></Card></Col>
            <Col sm="6" md="4" lg="3"><Card></Card></Col>
            <Col sm="6" md="4" lg="3"><Card></Card></Col>
            <Col sm="6" md="4" lg="3"><Card></Card></Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default App;
