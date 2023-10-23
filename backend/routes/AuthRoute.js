import Express from "express";
import { Login, logOut, Me } from "../controllers/Auth.js";

const router = Express.Router();

router.get("/me", Me);
router.post("/login", Login);
router.delete("/logout", logOut);

export default router;
