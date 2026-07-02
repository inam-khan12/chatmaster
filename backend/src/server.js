import express from "express"
import path from "path";
import dotenv from "dotenv"

import authRoutes from "./routes/auth.route.js"
import messageRoutes from "./routes/message.route.js"

const app = express();

const __dirname = path.resolve();

const PORT = process.env.PORT || 3000;


app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);

//make eay for deployment 

  app.use(express.static(path.join(__dirname, "../frontend/dist")));

  app.get("*", (_, res) => {
    res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"));
  });

console.log(process.env.NODE_ENV);

app.listen(3000,()=> console.log("app is running on port 3000"))