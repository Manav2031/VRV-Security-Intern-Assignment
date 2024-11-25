require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { connectDB, seedRoles } = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');

const app = express();
connectDB();
seedRoles();
app.use(cors())
app.use(express.json());
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));