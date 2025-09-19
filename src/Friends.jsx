import { use } from "react"

export default function Friends({friendPromise}) {

    const friends = use(friendPromise);
    console.log(friends)

    const FriendsStyle = {
        border: "2px solid white",
        borderRadius: "20px",
        marginBottom: "20px",
        padding: "20px"
    }

    return(
        <div style={FriendsStyle}>
            <h2>Friend : {friendPromise.length}</h2>
        </div>
    )
}