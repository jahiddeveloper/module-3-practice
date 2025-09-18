import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons'


export default function LikeAndDislike() {
  const [likeCount, setLikeCount] = useState(0);
  const [disLikeCount, setDislikeCount] = useState(0);

  const addLike = () => {
    const updateLike = likeCount + 1;
    setLikeCount(updateLike);
  };

  const addDislike = () => {
    const updateDislike = disLikeCount + 1;
    setDislikeCount(updateDislike);
  };

  const style = {
    marginBottom: "30px",
    padding: "10px 20px",
  }

  const btn2 = {
    marginLeft: "20px",
  }

  return (
    <div style={style}>
      <button onClick={addLike}>{likeCount} <FontAwesomeIcon icon={faThumbsUp} /></button>
      <button style={btn2} onClick={addDislike}>{disLikeCount} <FontAwesomeIcon icon={faThumbsDown} /></button>
    </div>
  );
}
