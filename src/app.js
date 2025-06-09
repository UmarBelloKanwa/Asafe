import authRoutes from './features/auth/auth.routes.js';
import express, { json } from 'express';
import createError from 'http-errors';
import cookieParser from 'cookie-parser';
import logger from 'morgan';

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// Static files are usually not needed for pure APIs; remove if unnecessary
// app.use(express.static('public'));

app.use(json());
app.use('/api/auth', authRoutes);

// catch 404 and forward to error handler
app.use((req, res, next) => {
    next(createError(404));
});

// error handler
app.use((err, req, res, next) => {
    // Send JSON error response
    res.status(err.status || 500).json({
        message: err.message,
        error: req.app.get('env') === 'development' ? err : {},
    });
});

export default app;
