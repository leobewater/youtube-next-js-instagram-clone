import { collection, onSnapshot, orderBy, query } from '@firebase/firestore';
import { useEffect, useState } from "react";
import Post from "./Post"
import { db } from '../firebase';

function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // snapshot provides a realtime update
    return onSnapshot(query(collection(db, 'posts'), orderBy('timestamp', 'desc')), snapshot => {
      setPosts(snapshot.docs);
    });
  }, []);

  // console.log(posts);

  return (
    <div>
      {posts.map(post => (
        <Post
          key={post.id} 
          id={post.id} 
          username={post.data().username} 
          userImg={post.data().profile} 
          img={post.data().image} 
          caption={post.data().caption} />
      ))}
    </div>
  )
}

export default Posts