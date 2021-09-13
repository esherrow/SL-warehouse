
const UnitsList = ({units}) => {
    // if (!units.length) {
    //     return <h3>No Units Available</h3>;
    // }

    return (
        <div>
            {units &&
                units.map((unit) => (
                    <div key={unit._id}>
                        <p>{unit.number} is avaiable for $49.99!</p>
                    </div>
                ))}
        </div>
    );
};

export default UnitsList;