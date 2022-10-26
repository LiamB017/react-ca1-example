import {useParams} from 'react-router-dom';
import {useState, useEffect} from 'react';
import axios from 'axios';
import Row from 'react-bootstrap/Row'
import Image from 'react-bootstrap/Image'
import Col from 'react-bootstrap/Col'


const SingleCountry = () => {
    let { name } = useParams();

    const [country, setCountry] = useState([]);
   

    useEffect(() => {
        axios.get(`https://restcountries.com/v3.1/name/${name}?fullText=true`)
             .then((response) => {
                setCountry(response.data[0]);
             })
             .catch((error) => {
                 console.log(error)
        });
    }, [] );

return (
    <>  
  <Row>
    <Col>
   <b>Common Name: </b> {country?.name?.common}
    </Col>
    <Col>
    <Image src = {country?.flags?.png} fluid />
    </Col>
  </Row>
     </>
);

};

export default SingleCountry;