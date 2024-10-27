const express = require("express")

const userRouter = require("./user")


const router = express.Router()


router.use("/user",userRouter)


router.get("/index1", (req, res)=>{
    res.send("heelo from /api/v1/user")

    
})
module.exports = router
