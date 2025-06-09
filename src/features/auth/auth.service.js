import prisma from '../../../prisma/client.js';

export default {
    createUser: async (userData) => {
        const { confirmPassword, ...data } = userData;

        if (userData.password !== confirmPassword) {
            throw new Error("Passwords do not match");
        }

        try {
            const user = await prisma.user.create({ data });
            return user;
        } catch (err) {
            console.error('Error creating user:', err);
            throw new Error('Failed to create user', err);
        }
    },
}