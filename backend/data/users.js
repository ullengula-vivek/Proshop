import bcrypt from 'bcryptjs'
const users = [
    {
        name: 'Admin User',
        email: 'admin@example.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true
    },
    {
        name: 'John Doe',
        email: 'John@gmail.com',
        password: bcrypt.hashSync('123456', 10)
    },
    {
        name: 'David Dev',
        email: 'david@gmail.com',
        password: bcrypt.hashSync('123456', 10)
    }

]

export default users