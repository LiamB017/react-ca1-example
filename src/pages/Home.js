import {useState, useEffect} from 'react';
import CountryCard from '../components/CountryCard'
import axios from 'axios';
import Row from 'react-bootstrap/Row';

const Home = () => {
const [countries, setCountries] = useState([]);
   

    useEffect(() => {
        axios.get('https://restcountries.com/v3.1/all')
             .then((response) => {
                setCountries(response.data)
             })
             .catch((error) => {
                 console.log(error)
        });
    }, [] );


let countryCards = countries.map((country, i)=> {
    return <CountryCard key={i} flag={country.flags.png} name={country.name.common} region={country.region} />;
});

// console.log(countryCards)

return (
    
<Row xs={1} md={3} className="g-4">
{countryCards}
</Row>
);
}; 





export default Home;