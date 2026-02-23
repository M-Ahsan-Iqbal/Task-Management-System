const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// User login

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await prisma.user.findUnique({
      where: { email: email, password: password },
    });
    if (!user) {
      return res.status(401).json({ error: "Invalid email or password" });
    }
    res.json({ message: "Login successful", user });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// User registration

exports.register = async (req, res) => {
  try {
    const { name, email, password, gender } = req.body;
    const existingUser = await prisma.user.findUnique({
      where: { email: email },
    });
    if (existingUser) {
      return res.status(400).json({ error: "Email already in Exist" });
    }
    const user = await prisma.user.create({
      data: { name, password, email, gender },
    });
    res.status(201).json({ message: "Registration successful", user })
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}