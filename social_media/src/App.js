import "./App.css";
import Post from "./components/Post";

const App = () => {
  const postsData = [
    {
      id: 1,
      author: "Marie",
      avatar: "M",
      content:
        "Premier café de la journée ☕ Qui d'autre a besoin de caféine pour survivre?",
      likes: 2,
      shares: 18,
    },
    {
      id: 2,
      author: "Thomas",
      avatar: "T",
      content: "Nouveau record personnel en salle de sport! 💪 On lâche rien!",
      likes: 5,
      shares: 46,
    },
    {
      id: 3,
      author: "Sophie",
      avatar: "S",
      content: "Weekend approche... Des plans pour sortir? 🎉",
      likes: 62,
      shares: 251,
    },
  ];

  return (
    <main>
      <div className="app-header">
        <h1>📱 Social Feed</h1>
        <p>Exercice JSX - Props et Events</p>
      </div>

      {postsData.map((post) => (
        <Post
          key={post.id}
          author={post.author}
          avatar={post.avatar}
          content={post.content}
          likes={post.likes}
          shares={post.shares}
          onLike={() => alert(`${post.author} a reçu un like!`)}
          onShare={() => alert(`Post de ${post.author} partagé!`)}
        />
      ))}
    </main>
  );
};

export default App;
