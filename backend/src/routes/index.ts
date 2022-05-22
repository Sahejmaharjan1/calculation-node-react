// Bring in the express server
import express from "express";

// Bring in the Express Router
const router = express.Router();

// Import the Controller
import { create, findAll } from "../controllers";

// Create a new calculation
router.post("/", create);

// Get all calculations
router.get("/", findAll);

export default router;
