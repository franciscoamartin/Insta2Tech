import Post from "./Post";

const posts = [
  {
    id: "123",
    username: "ssssangha",
    userImg: "https://avatars.githubusercontent.com/u/20363204",
    img: "https://avatars.githubusercontent.com/u/20363204",
    caption: "SUBSCRIBE AND DESTROY THE LIKE BUTTON for the YT algorithm",
  },
  {
    id: "123",
    username: "ssssangha",
    userImg: "https://avatars.githubusercontent.com/u/20363204",
    img: "https://avatars.githubusercontent.com/u/20363204",
    caption: "SUBSCRIBE AND DESTROY THE LIKE BUTTON for the YT algorithm",
  },
  {
    id: "123",
    username: "ssssangha",
    userImg: "https://avatars.githubusercontent.com/u/20363204",
    img: "https://avatars.githubusercontent.com/u/20363204",
    caption: "SUBSCRIBE AND DESTROY THE LIKE BUTTON for the YT algorithm",
  },
  {
    id: "123",
    username: "ssssangha",
    userImg: "https://avatars.githubusercontent.com/u/20363204",
    img: "https://avatars.githubusercontent.com/u/20363204",
    caption: "SUBSCRIBE AND DESTROY THE LIKE BUTTON for the YT algorithm",
  },
  {
    id: "123",
    username: "ssssangha",
    userImg: "https://avatars.githubusercontent.com/u/20363204",
    img: "https://avatars.githubusercontent.com/u/20363204",
    caption: "SUBSCRIBE AND DESTROY THE LIKE BUTTON for the YT algorithm",
  },
  {
    id: "123",
    username: "ssssangha",
    userImg: "https://avatars.githubusercontent.com/u/20363204",
    img: "https://avatars.githubusercontent.com/u/20363204",
    caption: "SUBSCRIBE AND DESTROY THE LIKE BUTTON for the YT algorithm",
  },
  {
    id: "123",
    username: "ssssangha",
    userImg: "https://avatars.githubusercontent.com/u/20363204",
    img: "https://avatars.githubusercontent.com/u/20363204",
    caption: "SUBSCRIBE AND DESTROY THE LIKE BUTTON for the YT algorithm",
  },
  {
    id: "123",
    username: "ssssangha",
    userImg: "https://avatars.githubusercontent.com/u/20363204",
    img: "https://avatars.githubusercontent.com/u/20363204",
    caption: "SUBSCRIBE AND DESTROY THE LIKE BUTTON for the YT algorithm",
  },
  {
    id: "123",
    username: "ssssangha",
    userImg: "https://avatars.githubusercontent.com/u/20363204",
    img: "https://avatars.githubusercontent.com/u/20363204",
    caption: "SUBSCRIBE AND DESTROY THE LIKE BUTTON for the YT algorithm",
  },
  {
    id: "123",
    username: "ssssangha",
    userImg: "https://avatars.githubusercontent.com/u/20363204",
    img: "https://avatars.githubusercontent.com/u/20363204",
    caption: "SUBSCRIBE AND DESTROY THE LIKE BUTTON for the YT algorithm",
  },
  {
    id: "123",
    username: "ssssangha",
    userImg: "https://avatars.githubusercontent.com/u/20363204",
    img: "https://avatars.githubusercontent.com/u/20363204",
    caption: "SUBSCRIBE AND DESTROY THE LIKE BUTTON for the YT algorithm",
  },
  {
    id: "123",
    username: "ssssangha",
    userImg: "https://avatars.githubusercontent.com/u/20363204",
    img: "https://avatars.githubusercontent.com/u/20363204",
    caption: "SUBSCRIBE AND DESTROY THE LIKE BUTTON for the YT algorithm",
  },
  {
    id: "123",
    username: "ssssangha",
    userImg: "https://avatars.githubusercontent.com/u/20363204",
    img: "https://avatars.githubusercontent.com/u/20363204",
    caption: "SUBSCRIBE AND DESTROY THE LIKE BUTTON for the YT algorithm",
  },
  {
    id: "123",
    username: "ssssangha",
    userImg: "https://avatars.githubusercontent.com/u/20363204",
    img: "https://avatars.githubusercontent.com/u/20363204",
    caption: "SUBSCRIBE AND DESTROY THE LIKE BUTTON for the YT algorithm",
  },
  {
    id: "123",
    username: "ssssangha",
    userImg: "https://avatars.githubusercontent.com/u/20363204",
    img: "https://avatars.githubusercontent.com/u/20363204",
    caption: "SUBSCRIBE AND DESTROY THE LIKE BUTTON for the YT algorithm",
  },
];

function Posts() {
  return (
    <div>
      {posts.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          username={post.username}
          userImg={post.userImg}
          img={post.img}
          caption={post.caption}
        />
      ))}
    </div>
  );
}

export default Posts;
