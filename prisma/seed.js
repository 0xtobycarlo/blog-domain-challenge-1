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
            bio: "fegiuheriugheguegherhiugrgrug"
            userId: 1
        }
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