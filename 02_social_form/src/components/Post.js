import { useState } from "react";
import LikeButton from "./LikeButton";
import ShareButton from "./ShareButton";

const Post = ({ author, avatar, content, initLikes, initShares }) => {
  const [likes, setLikes] = useState(initLikes);
  const [shares, setShares] = useState(initShares);

  const handleLike = () => {
    setLikes(likes + 1);
    alert(`${author} a reçu un like! Total: ${likes + 1}`);
  };

  const handleShare = () => {
    setShares(shares + 1);
    alert(`Post de ${author} partagé! Total: ${shares + 1}`);
  };

  return (
    <div className="post">
      <div className="post-header">
        <div className="avatar">{avatar}</div>
        <div className="post-author">{author}</div>
      </div>
      <div className="post-content">{content}</div>
      <div className="post-actions">
        <LikeButton likes={likes} onLike={handleLike} />
        <ShareButton shares={shares} onShare={handleShare} />
      </div>
    </div>
  );
};

export default Post;
