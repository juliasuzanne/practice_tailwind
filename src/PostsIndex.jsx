export function PostsIndex(props) {
  return (
    <div>
      <h1>All posts</h1>
      {props.posts.map((post) => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
          <img src={post.image} alt={post.title + "image"} />
        </div>
      ))}
    </div>
  );
}
