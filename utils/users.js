const users = [];

//addUser, getUser, removeUser, getallUser
const addUser = ({id, username, room}) => {
    //clean data
    username = username.trim().toLowerCase();
    room = room.trim().toLowerCase();
    //validate the data
    if(!username || !room){
        return {
            error : 'Username and room are required'
        }
    }
    //check for existing user
    const existingUser = users.find((user) => {
        return user.room === room && user.username === username
    })
    //Validate Username
    if(existingUser){
        return {
            error: 'Username is in use!'
        }
    }
    //store User
    const user = { id, username, room};
    users.push(user);
    return {user}
}

const getUser = (id) => {
    return users.find((user) => user.id == id)
}

const removeUser = (id) => {
    const index = users.findIndex((user) => user.id === id)

    if(index !== -1){
        return users.splice(index, 1)[0];
    }
}


const getUserInRoom = (room) => {
    return users.filter((user) => user.room === room);
}

module.exports = { addUser, removeUser, getUser, getUserInRoom};