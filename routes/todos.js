import express from "express";
import {
	createTodo,
	deleteTodo,
	readTodos,
	updateTodo,
} from "../controller/todos.js";

const router = express.Router();

router.post("/", createTodo);
router.get("/", readTodos);
router.patch("/:id", updateTodo);
router.delete("/:id", deleteTodo);

export default router;
