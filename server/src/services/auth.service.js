
const authService = {};

authService.get = (user) =>{
    return user;
    //grab user from database and return user information
}

authService.create = (user) => {
    return user;
    //insert new user in database
}

authService.update = (user) => {
    return user;
    //update user in database
}

authService.remove = (user) => {
    return user
    //remove user from database
}

export default authService;