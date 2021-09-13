
const UnitsList = ({units}) => {
    if (!units.length) {
        return <h3>No Units Available</h3>;
    }

    return (
        <section>
            {units &&
                units.map((unit => (
                <div key={unit._id} className="card mb-3">
                        <p className="card-header">
                            {unit.location}
                        </p>
                    <div className="card-body">
                        <p>{unit.number}</p>
                        <p className="mb-0">Status: {unit.status}</p>
                    </div>
                </div>
                )))
            }
        </section>
    )
};


export default UnitsList;