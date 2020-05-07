const users = []

const addUser = ({ id, username, room }) => {
    // Clean the data
    username = username.trim().toLowerCase()
    room = room.trim().toLowerCase()

    //Validate the data
    if (!username || !room) {
        return {
            error: 'Username and room are required!'
        }
    }

    // Check for existing error
    const existingUser = users.find((user) => {
        return user.room === room && user.username === username
    })

    // validate username
    if (existingUser) {
        return {
            error: 'Username is in user!'
        }
    }

    // Store user {
    const user = { id, username, room }
    users.push(user)
    return { user }

}

const removeUser = (id) => {
    const index = users.findIndex((user) => user.id === id)

    if (index !== -1) {
        return users.splice(index, 1)[0]
    }
}

const getUser = (id) => {
    return users.find((user) => user.id === id)

}

const getUserInRoom = (room) => {
    room = room.trim().toLowerCase()
    return users.filter((user) => user.room === room)
}

module.exports = {
    addUser,
    removeUser,
    getUser,
    getUserInRoom
}

// addUser({
//     id: 22,
//     username: 'Suraj',
//     room: '   Mafiya'
// })

// addUser({
//     id: 42,
//     username: 'Kiran',
//     room: '   Mafiya'
// })

// addUser({
//     id: 32,
//     username: 'Gaurav',
//     room: 'css'
// })

// const user = getUser(421)
// console.log(user)

// const userList = getUserInRoom('xor')
// console.log(userList)
