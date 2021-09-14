import { useQuery } from "@apollo/client";
import { QUERY_CLIENTS } from "../utils/queries";

function GetClients() {
    const { data, error } = useQuery(QUERY_CLIENTS);

    const clients = data?.users || [];

    console.log(data)

    return (
        <div>
            {clients &&
                clients.map((user) => (
                    <div key={user._id}>
                        <p>{user.first_name} {user.last_name} {user.email} {user.address} {user.phone}</p>
                    </div>
                ))}
        </div>
    )
}

export default GetClients;