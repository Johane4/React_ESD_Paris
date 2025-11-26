import React from "react";

const ShareButton = ({ shares, onShare }) => {
  return (
    <button className="btn btn-share" onClick={onShare}>
      🔗 {shares} Partages
    </button>
  );
};

export default ShareButton;
