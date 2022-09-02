import postcss from "postcss";
import Post from "./Post"

const posts = [
  {
    id: '123',
    username: 'ccc',
    userImg: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/899.jpg',
    img: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/899.jpg',
    caption: 'Subscribe and destroy the like button for the YT algorithm!'
  },
  {
    id: '333',
    username: 'aaa',
    userImg: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/899.jpg',
    img: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/899.jpg',
    caption: 'Subscribe and destroy the like button for the YT algorithm!'
  },
  {
    id: '444',
    username: 'bbb',
    userImg: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/899.jpg',
    img: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/899.jpg',
    caption: 'Subscribe and destroy the like button for the YT algorithm!'
  },
];

function Posts() {
  return (
    <div>
      {posts.map(post => (
        <Post key={post.id} id={post.id} username={post.username} userImg={post.userImg} img={post.img} caption={post.caption} />
      ))}
    </div>
  )
}

export default Posts