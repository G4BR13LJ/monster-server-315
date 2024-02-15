import express from "express";
import { getMonsters, getMonster, updateMonster, createMonster, deleteMonster } from "../controllers/monster.controller.js";
const router = express.Router();

router.get("/", getMonsters);
router.get("/:id", getMonster);
router.patch("/:id", updateMonster);
router.post("/", createMonster);
router.delete("/:id", deleteMonster);

export default router;