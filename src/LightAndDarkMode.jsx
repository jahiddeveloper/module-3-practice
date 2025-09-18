import { useState } from "react"

export default function LightAndDarkMode()  {

    const [isLightMode, setIsLightMode] = useState(true);

    const toggledMode = () => {
        setIsLightMode(!isLightMode);
    }

    const style = {
        backgroundColor: isLightMode ? "White" : "Black",
        color: isLightMode ? "Black" : "White", 
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        height: "100vh",
        transition: "all 0.3s ease",
        alignItem: "center",
        marginTop: "30px"
    }

    return(
        <div style={style}>
            <h1>{isLightMode ? "Light Mode" : "Dark Mode"}</h1>
            <button onClick={toggledMode} style={{ padding: "10px 20px", marginTop: "20px" }}>{isLightMode ? "Dark Mode" : "Light Mode"}</button>
        </div>
    )
}