import express, { json } from 'express';
const app = express();
import authRoutes from './src/auth/routes/routes';

app.use(json());
app.use('/api/auth', authRoutes);

export default app;
