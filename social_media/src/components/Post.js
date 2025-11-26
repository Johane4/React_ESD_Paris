import React from "react";
import LikeButton from "./LikeButton";
import ShareButton from "./ShareButton";

const Post = ({ author, avatar, content, likes, shares, onLike, onShare }) => {
  return (
    <section className="post">
      <div className="post-header">
        <div className="avatar">{avatar}</div>
        <h2 className="post-author">{author}</h2>
      </div>
      <p className="post-content">{content}</p>
      <div className="post-actions">
        <LikeButton likes={likes} onLike={onLike} />
        <ShareButton shares={shares} onShare={onShare} />
      </div>
    </section>
  );
};

export default Post;
