import express from 'express';
import sequelize from './config/database';

const app = express();
const PORT = process.env.PORT || 3000;

sequelize.authenticate()
  .then(() => {
	console.log('Connection has been established successfully.');
  })
  .catch(err => {
	console.error('Unable to connect to the database:', err);
  });

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});