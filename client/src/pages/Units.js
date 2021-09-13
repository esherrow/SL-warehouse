import { useQuery } from '@apollo/client';
import { QUERY_UNITS } from '../utils/queries';
import Unitslist from '../components/UnitsList';


const Units = () => {
    const { loading, error, data } = useQuery(QUERY_UNITS);
    const units = data?.units || [];
    console.log(units);
    return (
        <div className="row justify-content-center g-2">
        <div className="col-6 mb-3">
          {loading ? (
            <div>Loading...</div>
          ) : (
            <Unitslist units={units} title="Available Units" />
          )}
        </div>
      </div>
    )};

export default Units;