import { useEffect, useState } from "react";

const useCountries = () => {
    const [countries, setCountries] = useState([]);
    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => {
                const countries = [];
                for (const country of data) {
                    countries.push(country.name.common);
                }
                const sortedCountries = countries.filter(c => c.length <= 12).sort();
                return setCountries(sortedCountries);
            })
    }, []);

    return [countries];
};

export default useCountries;