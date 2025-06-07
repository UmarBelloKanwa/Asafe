export default {
    createUser: async (userData) => {
        // Simulate user creation logic
        console.log("User created with data:", userData);
        return { id: 1, ...userData }; // Mocked user object
    },
}