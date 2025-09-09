import readItemsFromFile  from "../dal/readFromFile.js";
import  writeItemToFile  from "../dal/writeToFile.js";
import generateToken from "../utils/tokenHelper.js"
import bcrypt from 'bcrypt';
const fileName = "users.json";

// GET /users - Get all users names
export async function getUsersNames() {
    const users = await readItemsFromFile(fileName);
    const nameArray = users.map(user => user.name);
    return nameArray
}

export async function findUserByName(name) {
    const users = await readItemsFromFile(fileName);
    const user = users.filter(user => user.name === name);
    return user;
}

// Insert a new player (shared logic for user/guest)
export async function createUser(name, password) {
    if (!name || !password) {
        throw new Error("Missing name or password");
    }
    let existing = await findUserByName(name);
    if (existing) throw new Error("Username already exists");
  
    let passwordhash = await bcrypt.hash(password, 10);
    let newUsers = {name, passwordhash}
    return await writeItemToFile(fileName, newUsers)
}

// Login an existing player (verify password)
export async function loginUser(name, password) {
    if (!name || !password){
        throw new Error("Missing name or password");
    }
    const user = await findUserByName(name);
    if (!user){
        throw new Error("user not found");
    }
    if (bcrypt.compare(password, player.passwordhash)){ 
        throw new Error("Incorrect password");
    }
    console.log("aaaa")
    const token = generateToken(user);
    console.log("token ", token)
    return ({ token, user })
}

