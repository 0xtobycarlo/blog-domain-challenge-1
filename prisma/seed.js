const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function seed() {
    const createdUsers = await prisma.user.createMany({
        data: [
            { username: 'alicemartin' },
            { username: 'alicemartin' }
        ]
    });

    console.log(`${createdUsers.count} users created`, createdUsers);

    // Add your code here

    const createProfile = await prisma.profile.create ({
        data: {
            profilePic: "randomURL.com",
            bio: "fegiuheriugheguegherhiugrgrug",
            userId: 1
        }
    })

    const createPost = await prisma.post.createMany ({
        data: [{
            title: "Blog Post 1",
            content: "Lorem ipsum dolor sit amet. Quo architecto optio sit provident nisi et necessitatibus enim ea expedita quaerat.",
            imgURL: "image.url.com",
            published: true,
            profileId: 1
        },
        {
            title: "Blog Post 2",
            content: "Lorem ipsum dolor sit amet. Quo architecto optio sit provident nisi et necessitatibus enim ea expedita quaerat.",
            published: true,
            profileId: 1
        },
    ]
    })

    const createComment = await prisma.comment.create ({
        data: {
            content: "250 Characters Or Less",
            postId: 1,
            userId: 1,
            replies: {
                create: [{
                    content: "Below 250 :)",
                    postId: 1,
                    userId: 1,
                }]
            }
        },
    })

    // Don't edit any of the code below this line
    process.exit(0);
}

seed()
    .catch(async (error) => {
        console.error(error);
        await prisma.$disconnect();
        process.exit(1);
    })