import prisma from '../../../prisma/client.js';

export default {
    createUser: async (userData) => {
        // Simulate user creation logic
        try {
            const user = await prisma.user.create({
                data: userData,
            });
            res.status(201).json(user);
        } catch (err) {
            res.status(500).json({ error: 'Failed to create user' });
        }
    },
}