const express = require('express');
const app = express();
const dotenv = require('dotenv');
const path = require('path');
const cors = require('cors');
const connectDatabase = require('./config/connectDatabase');
dotenv.config({ path: path.join(__dirname, 'config', 'config.env') });

const data = require('./routes/additionalInfo');

connectDatabase();

app.use(express.json());
app.use(cors());
app.use('/api/v1', data);
app.listen(process.env.PORT, () => {
    console.log(`Server is listening on port ${process.env.PORT} ${process.env.NODE_ENV}`);
});