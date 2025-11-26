import React from "react";

const LikeButton = ({ likes, onLike }) => {
  return (
    <button className="btn btn-like" onClick={onLike}>
      ❤️ {likes} Likes
    </button>
  );
};

export default LikeButton;
