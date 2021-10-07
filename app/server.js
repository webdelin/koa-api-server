import app from './app';
import {PORT} from './config';

const server = app.listen(PORT, (error) => {
  if (error) console.log(error);
  console.log(`Server running on PORT: ${PORT}`);
});

export default server;
