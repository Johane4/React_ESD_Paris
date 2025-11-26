import { useState } from "react";

const AddPost = ({ onPost }) => {
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!author.trim()) {
      setError("Le nom de l'auteur est requis");
      return;
    }

    if (!content.trim()) {
      setError("Le contenu du post est requis");
      return;
    }

    const newPost = {
      id: Date.now(),
      author: author.trim(),
      avatar: author.trim().charAt(0).toUpperCase(),
      content: content.trim(),
      initLikes: 0,
      initShares: 0,
    };

    onPost(newPost);
    setSuccess("Post ajouté avec succès!");
    setAuthor("");
    setContent("");

    setTimeout(() => setSuccess(""), 3000);
  };

  return (
    <div className="form-container">
      <h2>Créer un nouveau post</h2>
      {error && <div className="error-message">{error}</div>}
      {success && <div className="success-message">{success}</div>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="author">Nom de l'auteur</label>
          <input
            id="author"
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            placeholder="Votre nom"
          />
        </div>
        <div className="form-group">
          <label htmlFor="content">Contenu du post</label>
          <textarea
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Quel est votre mood du jour ?"
          />
        </div>
        <div className="form-actions">
          <button type="submit" className="btn-submit">
            Ajouter le post
          </button>
          <button
            type="button"
            className="btn-reset"
            onClick={() => {
              setAuthor("");
              setContent("");
              setError("");
            }}
          >
            Réinitialiser
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddPost;
