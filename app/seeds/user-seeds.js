import faker from 'faker';
import _ from 'lodash';
import {User} from '../modules/users';

function init() {
  const promises = [];

  _.times(500, ()=> {
    const userPromise = User.create({
      email: `${faker.lorem.word(3, 5)}-${faker.datatype.number(999)}@${faker.lorem.word(4, 8)}.${faker.lorem.word(2)}`,
      firstName: `${faker.name.firstName()}`,
      lastName: `${faker.name.lastName()}`,
      password: 1111,
    });
    promises.push(userPromise);
  });
  return Promise.all(promises);
}

export default init;
