import { faker } from '@faker-js/faker';
import { useEffect, useState } from "react"

function Suggestions() {
  const [suggestions, setSuggestions] = useState([]);

  function createRandomUser() {
    return {
      username: faker.internet.userName(),
      name: faker.name.firstName(),
      phone: faker.phone.number(),
      email: faker.internet.email(),
      avatar: faker.image.avatar(),
      registeredAt: faker.date.past(),
      company: {
        name: faker.company.name(),
      }
    };
  }

  useEffect(() => {
    const suggestions = [...Array(5)].map((_, i) => ({
      ...createRandomUser(),
      id: i,
    }))

    setSuggestions(suggestions);
  }, [])

  return (
    <div className='mt-4 ml-10'>
      <div className='flex justify-between text-sm mb-5'>
        <h3 className='text-sm font-bold text-gray-400'>Suggestions for you</h3>
        <button className='text-gray-600 font-semibold'>See All</button>
      </div>

      {
        suggestions.map(profile => (
          <div key={profile.id} className="flex items-center justify-between mt-3">
            <img className="w-10 h-10 rounded-full border p-[2px]" src={profile.avatar} alt={profile.name} />

            <div className='flex-1 ml-4'>
              <h2 className='font-semibold'>{profile.username}</h2>
              <h3 className='text-xs text-gray-400'>Works at {profile.company.name}</h3>
            </div>

            <button className='text-xs text-blue-400 font-bold'>Follow</button>
          </div>
        ))
      }
    </div>
  )
}

export default Suggestions