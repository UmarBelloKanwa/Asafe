export const mixers = [
    {
        input: [
            "prisma/base.prisma",
            "src/features/auth/auth.prisma",
            //"./modules/posts/posts.prisma"
        ],
        output: "prisma/schema.prisma"
    }
];