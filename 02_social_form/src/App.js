import "./App.css";
import { useState } from "react";
import Post from "./components/Post";
import AddPost from "./components/AddPost";

const App = () => {
  const initialPosts = [
    {
      id: 1,
      author: "Marie",
      avatar: "M",
      content:
        "Premier café de la journée ☕ Qui d'autre a besoin de caféine pour survivre?",
      initLikes: 2,
      initShares: 18,
    },
    {
      id: 2,
      author: "Thomas",
      avatar: "T",
      content: "Nouveau record personnel en salle de sport! 💪 On lâche rien!",
      initLikes: 5,
      initShares: 46,
    },
    {
      id: 3,
      author: "Sophie",
      avatar: "S",
      content: "Weekend approche... Des plans pour sortir? 🎉",
      initLikes: 62,
      initShares: 251,
    },
  ];
  const [posts, setPosts] = useState(initialPosts);

  const handleAddPost = (newPost) => {
    setPosts([newPost, ...posts]);
    console.log(newPost);
  };
  return (
    <main>
      <div className="app-header">
        <h1>📱 Social Feed</h1>
        <p>Exercice JSX - Props et Events</p>
      </div>

      <AddPost onPost={handleAddPost} />

      {posts.map((post) => (
        <Post
          key={post.id}
          author={post.author}
          avatar={post.avatar}
          content={post.content}
          initLikes={post.initLikes}
          initShares={post.initShares}
          // onLike={() => alert(`${post.author} a reçu un like!`)}
          // onShare={() => alert(`Post de ${post.author} partagé!`)}
        />
      ))}
    </main>
  );
};

export default App;
