// create your App component here
import React, {useEffect, useState} from "react";

function App(){
    const [imgLoaded, setImgLoaded] = useState(false)
    const [img, setImage] = useState("")

    useEffect(()=>{
        fetch("https://dog.ceo/api/breeds/image/random")
        .then(resp=>resp.json())
        .then(data=>{setImage(data.message); setImgLoaded(true)})
    }, [])



    return (
        <>
        {imgLoaded? <img alt="A Random Dog" src={img}/> : <p>Loading...</p>}
        </>
    )
}

export default App
