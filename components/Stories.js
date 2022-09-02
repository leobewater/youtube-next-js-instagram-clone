import { faker } from '@faker-js/faker';
import { useEffect, useState } from 'react';
import Story from './Story';
import { useSession } from 'next-auth/react';

function Stories() {
  const { data: session } = useSession();
  const [suggestions, setSuggestions] = useState([]);

  function createRandomUser() {
    return {
      //   userId: faker.datatype.uuid(),
      username: faker.internet.userName(),
      name: faker.name.firstName(),
      phone: faker.phone.number(),
      email: faker.internet.email(),
      avatar: faker.image.avatar(),
      registeredAt: faker.date.past(),
    };
  }

  useEffect(() => {
    const suggestions = [...Array(20)].map((_, i) => ({
      ...createRandomUser(),
      id: i,
    }));

    setSuggestions(suggestions);
  }, []);

  return (
    <div className="flex space-x-2 p-6 bg-white mt-8 border-gray-200 border rounded-sm overflow-x-scroll scrollbar-thin scrollbar-thumb-black">
      {/* add your profile picture to the first story position */}
      {session && (
        <Story img={session.user.image} username={session.user.username} />
      )}

      {suggestions.map((profile) => (
        <Story
          key={profile.id}
          img={profile.avatar}
          username={profile.username}
        />
      ))}
    </div>
  );
}

export default Stories;
