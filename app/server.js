import app from './app';
import {PORT} from './config';
import ENV, { IS_DEV } from './utils/env';

const server = app.listen(PORT, (error) => {
  if (error) console.log(error);
  console.log(ENV);
  console.log(IS_DEV);
  console.log(`Server running on PORT: ${PORT}`);
});

export default server;
