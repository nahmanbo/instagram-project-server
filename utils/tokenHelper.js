  // Helper to generate JWT
  export default function genToken(user) {
    return jwt.sign({name: user.name}, process.env.JWT_SECRET || "dev-secret", { expiresIn: "12h" });
  }