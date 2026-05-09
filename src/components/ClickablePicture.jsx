import { useState } from "react";
import image1 from "./assets/maxence.png";
import image2 from "./assets/maxence-glasses.png";

function ClickablePicture (){
    const [clicked, setClicked] = useState(false);

    return (
        <img 
        src={clicked ? image2 : image1}
        alt="Maxence"
        onClick={() => setClicked (!clicked)}
        />
    );
}

export default ClickablePicture;
