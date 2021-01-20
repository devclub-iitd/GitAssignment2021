import './App.css';
import Card from './CardWrapper';
import Header from './Header';
import Footer from "./Footer";
import { Container, Row, Col } from 'reactstrap';

function App() {
  return (
    <div className="App">
      <div>
      <Header />
      </div>
      <div>  
        <Container>
          <Row>
            <Col md="6"><Card></Card></Col>
            <Col md="6"><Card></Card></Col>
            <Col md="6"><Card></Card></Col>
            <Col md="6"><Card></Card></Col>
            <Col md="6"><Card></Card></Col>
            <Col md="6"><Card></Card></Col>
          </Row>
        </Container>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
