import {getUsersNames, createUser, loginUser} from "../services/userService.js"

// Get all users names
export async function getUsersNamesController(req, res) {
    try {
        const users = await getUsersNames();
        res.status(200).json(users);
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
  }
  
  // Register a new player
  export async function createUsersController(req, res) {
    const { name, password } = req.body;
    
    try {
      const user = await createUser(name, password);
      res.status(201).json(user);
    } catch (err) {
      const code = 500;
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
      res.status(200).json({ token, player });
    } catch (err) {
      const code = 500;
      if(err.message === "Missing name or password")
        code = 400;
      else if(err.message.includes("password") || err.message.includes("not found"))
        code = 401;
      res.status(code).json({ error: err.message });
    }
  }
    

  