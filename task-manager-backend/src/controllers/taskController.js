import prisma from "../lib/prismaClient.js";

// get all tasks of a user

export const getAllTasks = async (req, res) => {
  try {
    const { userId } = req.params;
    const tasks = await prisma.task.findMany({
      where: { userId: parseInt(userId) },
      orderBy: { createdAt: "desc" },
    });
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// get single task
export const getTask = async (req, res) => {
  try {
    const { id } = req.params;
    const task = await prisma.task.findUnique({
      where: { id: parseInt(id) },
    });
    if (!task) {
      return res.status(404).json({ error: "Task not found" });
    }
    res.json(task);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// create a new task
export const createTask = async (req, res) => {
  try {
    const { title, description, status, priority, dueDate, userId } = req.body;
    const existingUser = await prisma.user.findUnique({
      where: { id: parseInt(userId) },
    });
    if (!existingUser) {
      return res.status(400).json({ error: `User Id ${userId} not found` });
    }
    const task = await prisma.task.create({
      data: {
        title,
        description,
        status: status || "pending",
        priority: priority || "medium",
        dueDate: dueDate ? new Date(dueDate) : null,
        userId: parseInt(userId),
      },
    });
    res.status(201).json(task);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// update task
export const updateTask = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, description, status, priority, dueDate } = req.body;
        const task = await prisma.task.update({
          where: { id: parseInt(id) },
            data: {
                title,
                description,
                status,
                priority,
                dueDate: dueDate ? new Date(dueDate) : null,
            }
        });
        res.json(task);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// delete task
export const deleteTask = async (req, res) => {
    try {
        const { id } = req.params;
        await prisma.task.delete({
            where: { id: parseInt(id) },
        });
        res.json({ message: "Task deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};