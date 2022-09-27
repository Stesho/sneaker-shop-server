import express from 'express';
import corseMeddleware from './middleware/cors.middleware.js';
import userRouter from './routers/user.router.js';

const PORT = process.env.PORT || 3001;

const app = express();

app.use(corseMeddleware);
app.use(express.json());

app.use('/api', userRouter);

app.listen(PORT, () => console.log(`Server started on PORT ${PORT}`));
