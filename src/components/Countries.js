import React, { useEffect, useState } from 'react';
import axios from 'axios'
import Card from './Card';

const Countries = () => {

    const [data, setData] = useState([]);
    const [rangeValue, setRangeValue] = useState(40)
    const [selectedRadio, setSelectedRadio] = useState('')
    // const [playOnce, setPlayonce] = useState(true)
    const radios = ["Africa", "America", "Asia", "Europa", "Oceania"]

    useEffect(() => {
        axios.get('https://restcountries.eu/rest/v2/all?fields=name;population;region;capital;flag')
            .then((res) => setData(res.data));
    }, [])


    return (
        <div className="countries">
            <div className="sort-container">
                <input type="range"
                    min="1" max="250"
                    value={rangeValue}
                    onChange={(e) => setRangeValue(e.target.value)}
                />
                <ul>
                    {radios.map((radio) => (
                        <li key={radio}>
                            <input
                                type="radio"
                                value={radio}
                                id={radio}
                                checked={radio === selectedRadio}
                                onChange={(e) => setSelectedRadio(e.target.value)}
                            />
                            <label htmlFor={radio}>{radio}</label>
                        </li>

                    ))}
                </ul>
            </div>

            <ul className="countries-list">
                {data
                    .filter((country) => country.region.includes(selectedRadio))
                    .sort((a, b) => b.population - a.population)
                    .map((country) => (
                        <Card country={country} key={country.name} />
                    ))}
            </ul>


        </div>
    );
};

export default Countries;