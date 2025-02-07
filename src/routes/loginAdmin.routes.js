import { loginAdmin } from "../services/loginAdmin.js";
import express from "express";


export const loginAdminRouter = express.Router();

loginAdminRouter.post("/", loginAdmin)