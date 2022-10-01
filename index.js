import express from 'express';
import corseMeddleware from './middleware/corsMiddleware.js';
import userRouter from './routers/userRouter.js';

const PORT = process.env.PORT || 3001;

const app = express();

app.use(corseMeddleware);
app.use(express.json());

app.use('/auth', userRouter);

app.listen(PORT, () => console.log(`Server started on PORT ${PORT}`));
