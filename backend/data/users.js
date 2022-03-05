import bcrypt from 'bcryptjs'

const users = [
    {
        name: 'Admin',
        email: 'admin@example.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true,
    },
    {
        name: 'Jon Doe',
        email: 'jon.doe@example.com',
        password: bcrypt.hashSync('123456', 10),
    },
    {
        name: 'Jane Doe',
        email: 'jane.doe@example.com',
        password: bcrypt.hashSync('123456', 10),
    },
]

export default users