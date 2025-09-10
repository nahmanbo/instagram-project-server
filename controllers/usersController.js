import {getUsersNames, findUserByName, createUser, loginUser} from "../services/userService.js"

// Get all users names
export async function getUsersNamesController(req, res) {
    try {
        const users = await getUsersNames();
        res.status(200).json(users);
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
  }

// Get users by name
export async function getUserByNameController(req, res) {
  const {name} = req.body;
  try {
      const user = await findUserByName(name);
      res.status(200).json(user);
  } catch (err) {
      res.status(500).json({ error: err.message })
  }
}
  
  // Register a new users
  export async function createUsersController(req, res) {
    const { name, password } = req.body;
    
    try {
      const user = await createUser(name, password);
      res.status(201).json(user);
    } catch (err) {
      let code = 500;
      if(err.message === "Missing name or password")
        code = 400;
      else if(err.message === "Username already exists")
        code = 409;
      res.status(code).json({ error: err.message });
    }
  }
  
  // Authenticate and return JWT
  export async function loginUserController(req, res) {
    const { name, password } = req.body;
    
    try {
      const resp = await loginUser(name, password)
      res.status(200).json(resp);
    } catch (err) {
      let code = 500;
      if(err.message === "Missing name or password")
        code = 400;
      else if(err.message.includes("password") || err.message.includes("not found"))
        code = 401;
      res.status(code).json({ error: err.message });
    }
  }
    

  