import app from './app';
const PORT = process.env.PORT || 4000;

const server = app.listen(PORT, (error) => {
  if (error) console.log(error);
  console.log(`Server running on PORT: ${PORT}`);
});

export default server;
