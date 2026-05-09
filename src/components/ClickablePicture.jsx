import { useState } from "react";
import image1 from "../assets/images/maxence.png";
import image2 from "../assets/images/maxence-glasses.png";

function ClickablePicture (){
    const [clicked, setClicked] = useState(false);

    return (
        <img 
        className="maxence"
        src={clicked ? image2 : image1}
        alt="Maxence"
        onClick={() => setClicked (!clicked)}
        />
    );
}

export default ClickablePicture;
