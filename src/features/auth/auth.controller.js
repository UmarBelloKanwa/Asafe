import service from "./auth.service.js";
import userSchema from "./auth.schemas.js";


export function signup(req, res) {
    const { error, value } = userSchema.validate(req.body, { abortEarly: false });

    if (error) {
        // If validation fails, send back all error messages
        return res.status(400).json({
            success: false,
            errors: error.details.map(err => err.message)
        });
    }

    service.createUser(value)
        .then(user => {
            // User created successfully
            res.status(201).json({
                success: true,
                message: 'User created successfully',
                data: user
            });
        })
        .catch(err => {
            // Prisma unique constraint error (duplicate email)
            if (err.code === 'P2002' && err.meta && err.meta.target && err.meta.target.includes('email')) {
                return res.status(409).json({
                    success: false,
                    message: 'Email already exists',
                });
            }
            // Handle any other errors from the service layer
            res.status(500).json({
                success: false,
                message: 'Internal server error',
                error: err.message
            });
        });
}