import {
    BookmarkIcon,
    ChatBubbleBottomCenterIcon,
    EllipsisHorizontalIcon,
    FaceSmileIcon,
    HeartIcon,
    PaperAirplaneIcon,
    Bars4Icon,
} from '@heroicons/react/24/outline';
import {
    HeartIcon as HeartIconFilled
} from '@heroicons/react/24/solid';

function Post({ id, username, userImg, img, caption }) {
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
            <div className='flex justify-between px-4 pt-4'>
                <div className='flex space-x-4'>
                    <HeartIcon className='btn' />
                    <ChatBubbleBottomCenterIcon className='btn' />
                    <PaperAirplaneIcon className='btn -rotate-90' />
                </div>
                <BookmarkIcon className='btn' />
            </div>

            {/* caption */}
            
            {/* comments */}
            {/* input box */}
        </div>

    )
}

export default Post