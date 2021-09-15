
const UnitsList = ({units}) => {
    // if (!units.length) {
    //     return <h3>No Units Available</h3>;
    // }

    console.log(units)

    return (
        <div>
            {units &&
                units.map((unit) => (
                    <div key={unit._id}>
                        <p>{unit.number} is available for {unit.cost}</p>
                    </div>
                ))}
        </div>
    );
};

export default UnitsList;