import express from "express"
import path from "path";
import cookieparser from "cookie-parser"


import authRoutes from "./routes/auth.route.js"
import messageRoutes from "./routes/message.route.js"
import { connectDB } from "./lib/db.js";
import { ENV } from "./lib/env.js";


const app = express();

const __dirname = path.resolve();

const PORT = ENV.PORT || 3000;
app.use(express.json());


app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use(cookieparser());

//make eay for deployment 

  app.use(express.static(path.join(__dirname, "../frontend/dist")));

  app.get("*", (_, res) => {
    res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"));
  });

console.log(ENV.NODE_ENV);

app.listen(3000,()=>{
  console.log("app is running on port 3000")
  connectDB();
} )