import { faker } from '@faker-js/faker';
import { useEffect } from 'react';

function Stories() {
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

    console.log(suggestions);

  }, []);

  return <div></div>;
}

export default Stories;
