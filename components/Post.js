import { addDoc, collection, onSnapshot, query, orderBy, serverTimestamp } from '@firebase/firestore';
import { db } from '../firebase';
import { useSession } from 'next-auth/react';
import {
    BookmarkIcon,
    ChatBubbleBottomCenterIcon,
    EllipsisHorizontalIcon,
    FaceSmileIcon,
    HeartIcon,
    PaperAirplaneIcon,
    Bars4Icon,
} from '@heroicons/react/24/outline';
import { HeartIcon as HeartIconFilled } from '@heroicons/react/24/solid';
import { useEffect, useState } from 'react';

function Post({ id, username, userImg, img, caption }) {
    const { data: session } = useSession();
    const [comment, setComment] = useState('');
    const [comments, setComments] = useState([]);

    useEffect(() =>
        onSnapshot(
            query(
                collection(db, 'posts', id, 'comments'),
                orderBy('timestamp', 'desc')
            ),
            snapshot => setComments(snapshot.docs)
        ), [db]
    );

    // console.log(comments);

    const sendComment = async (e) => {
        e.preventDefault();

        const commentToSend = comment;
        setComment('');

        await addDoc(collection(db, 'posts', id, 'comments'), {
            comment: commentToSend,
            username: session.user.username,
            userImage: session.user.image,
            timestamp: serverTimestamp(),
        });
    }

    return (
        <div className='bg-white my-7 border rounded-sm'>
            {/* header */}
            <div className='flex items-center p-5'>
                <img className="rounded-full h-12 w-12 object-contain border p-1 mr-3" src={userImg} alt={username} />
                <p className='flex-1 font-bold'>{username}</p>
                <EllipsisHorizontalIcon className='h-5' />
            </div>

            {/* image */}
            <img className="object-cover w-full" src={img} alt="Image" />

            {/* buttons */}
            {session && (
                <div className='flex justify-between px-4 pt-4'>
                    <div className='flex space-x-4'>
                        <HeartIcon className='btn' />
                        <ChatBubbleBottomCenterIcon className='btn' />
                        <PaperAirplaneIcon className='btn -rotate-90' />
                    </div>
                    <BookmarkIcon className='btn' />
                </div>
            )}


            {/* caption */}
            <p className='p-5 truncate'>
                <span className='font-bold mr-1'>{username}</span> {caption}
            </p>

            {/* comments */}
            {comments.length > 0 && (
                <div className='ml-10 h-20 overflow-y-scroll scrollbar-thumb-back scrollbar-thin'>
                    {comments.map(comment => (
                        <div key={comment.id} className="flex items-center space-x-2 mb-3">
                            <img
                                className="h-7 rounded-full"
                                src={comment.data().userImage}
                                alt={comment.data().comment}
                            />
                            <p className='text-sm flex-1'><span className='font-bold mr-2'>{comment.data().username}</span>{comment.data().comment}</p>
                        </div>
                    ))}
                </div>
            )}

            {/* input box */}
            {session && (
                <form className='flex items-center p-4'>
                    <FaceSmileIcon className='h-7' />
                    <input
                        type="text"
                        value={comment}
                        onChange={e => setComment(e.target.value)}
                        placeholder="Add a comment..."
                        className='border-none flex-1 focus:ring-0 outline-none'
                    />
                    <button
                        type='submit'
                        disabled={!comment.trim()}
                        onClick={sendComment}
                        className='font-semibold text-blue-400'>Post</button>
                </form>
            )}
        </div>

    )
}

export default Post