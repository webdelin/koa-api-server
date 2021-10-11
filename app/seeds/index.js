import {MONGO_URI} from '../config';
import mongooseConnector from '../connectors/mongoose-connector';
import userSeeds from './user-seeds';
import summarySeeds from './summary-seeds';

async function initSeeds() {
  const mongoConnection = await mongooseConnector(MONGO_URI);
  await mongoConnection.connection.dropDatabase();
  try {
    const users = await userSeeds();
    const summaries = await summarySeeds(users);
    console.log('summaries: ', summaries);
  } catch (e) {
    console.error(e);
  } finally {
    mongoConnection.connection.close();
  }
}

initSeeds();
