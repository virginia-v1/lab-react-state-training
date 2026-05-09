import { useState } from "react";

function LikeButton() {
const [num, setNum] = useState (0)
  return (
    <button onClick={() => setNum(num +1)}>{num} Likes</button>

  );
}

export default LikeButton;