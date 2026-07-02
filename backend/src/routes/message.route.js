import express from "express"

const router = express.Router();

router.get("/send", (req,res)=>{
  res.send("send msg to endpoint");
});

router.get("/receive", (req,res)=>{
  res.send("receive msg to endpoint");
});

export default router;
