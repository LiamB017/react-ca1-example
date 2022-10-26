import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Home from './pages/Home';
import SingleCountry from './pages/SingleCountry.js'
const App = () => {
 return (
   

    <Router>
        <Container>
            <Row>
                <Col>
                <h1>This is App</h1>
<Routes>
<Route path='/' element={<Home /> } />
<Route path='/country/:name' element={<SingleCountry /> } />
</Routes>
                </Col>
            </Row>
        </Container>



    </Router>
 )
};

export default App;