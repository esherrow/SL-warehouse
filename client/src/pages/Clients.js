import { useQuery } from "@apollo/client";
import { QUERY_CLIENTS } from "../utils/queries";

function GetClients() {
    const { data, error } = useQuery(QUERY_CLIENTS);

    const clients = data?.users || [];

    console.log(data)

    return (
        <div>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Address</th>
                        <th>Phone</th>
                        <th>Email</th>
                        <th>Units</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {clients && clients.map((user) => (
                        <tr key={user._id}>
                            <td>{user.first_name}</td>
                            <td>{user.last_name}</td>
                            <td>{user.address}</td>
                            <td>{user.phone}</td>
                            <td>{user.email}</td>
                            <td>{user.units}</td>
                            <td>{user.status}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {/* {clients &&
                clients.map((user) => (
                    <div key={user._id}>
                        <p>{user.first_name} {user.last_name} {user.email} {user.address} {user.phone}</p>
                    </div>
                ))} */}
        </div>
    )
}

export default GetClients;