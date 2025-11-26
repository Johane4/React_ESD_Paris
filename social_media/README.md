# Exercice JSX - Props et Events

Un exercice interactif pour apprendre la syntaxe JSX, les props et les event handlers en React.

## Ce que tu vas apprendre

- **JSX**: La syntaxe pour écrire du HTML-like en JavaScript
- **Props**: Comment passer des données d'un composant parent à un composant enfant
- **Events**: Comment réagir aux clics des utilisateurs avec des fonctions
- **Composants**: Comment créer des composants réutilisables

## Structure du code

```
App (composant principal)
├── Post (affiche un post)
│   ├── LikeButton (reçoit likes + onLike)
│   └── ShareButton (reçoit shares + onShare)
```

## Comment ça marche

### 1. Props - Passer des données aux composants

```jsx
<Post
  author="Marie"
  avatar="M"
  content="Bonjour!"
  likes={42}
  shares={0}
  onLike={() => alert("Liked!")}
  onShare={() => alert("Shared!")}
/>
```

**Les props sont les "paramètres" d'un composant.**

### 2. JSX - La syntaxe React

```jsx
function LikeButton({ likes, onLike }) {
  return <button onClick={onLike}>❤️ {likes} Likes</button>;
}
```

**Remarques:**

- On destructure les props: `{ likes, onLike }`
- `{likes}` insère la valeur de la variable
- `onClick={onLike}` attache un event handler

### 3. Events - Réagir aux clics

```jsx
<button onClick={() => alert("Cliqué!")}>Clic moi!</button>
```

**Différents events:**

- `onClick` - Au clic du bouton
- `onChange` - Quand la valeur d'un input change
- `onSubmit` - Quand on soumet un formulaire

## Exercices

### Niveau 1: Comprendre les props

1. Identifie toutes les props reçues par le composant `Post`
2. Trace le chemin: d'où viennent les données `author`, `avatar`, `content`?
3. Modifie les valeurs initiales des props dans `App` (change `likes={5}` en `likes={100}` par exemple)

### Niveau 3: Modifier les event handlers

1. Modifie la fonction `onLike` pour afficher le nombre de likes
2. Crée une fonction `onShare` qui affiche "Partagé 5 fois!" (avec un nombre qui change)
3. Fais de même pour les commentaires

**Indice:**

```jsx
onLike={() => alert(`${post.author} a reçu ${post.likes + 1} likes!`)}
```

## Conseils pour bien coder

✅ **À faire:**

- Utilise des noms clairs: `LikeButton` au lieu de `Btn`
- Regroupe les props liées: `{ author, avatar }` plutôt que 10 props séparées
- Crée des composants petits et simples

❌ **À éviter:**

- Ne modifie jamais les props directement
- Ne crée pas de composant trop gros (plus de 50 lignes)
- N'oublie pas la clé `key` quand tu utilises `.map()`

Bon courage! 🚀
