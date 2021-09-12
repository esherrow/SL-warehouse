import { useState } from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_UNITS } from '../utils/queries';
 import UnitsList from '../components/UnitsList';


 
const Units = () => {
    const [currentUnits, setUnits] = useState({});

    const { loading, error, data } = useQuery(QUERY_UNITS);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    return data.units.map((unit) => (
        <div key={unit.number}>
            <p>{unit.number}, {unit.location}, {unit.status} </p>
        </div>
    ))};

export default Units;