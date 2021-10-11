import faker from 'faker';
import _ from 'lodash';
import {Summary} from '../modules/summaries';

export default (users) => {
  if (!users || !users.length) {
    throw Error('User is required');
  }
  const promises = [];
  _.times(500, () => {
    const summaryPromise = Summary.create({
      title: faker.lorem.words(2, 5),
      description: faker.lorem.lines(4, 10),
      tags: faker.lorem.words(2, 6).split(' '),
      userId: users[faker.datatype.number(0, 499)]._id,
    });
    promises.push(summaryPromise);
  });
  return Promise.all(promises);
};
