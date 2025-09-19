import { use } from "react"

export default function Users({fetchUsers}) {

    const users = use(fetchUsers);
    console.log(users)

    const UsersStyle = {
        border: "2px solid white",
        borderRadius: "20px",
        marginBottom: "20px",
        padding: "20px"
    }

    return(
        <div style={UsersStyle}>
            <h2>Users : {users.length}</h2>
        </div>
    )
}