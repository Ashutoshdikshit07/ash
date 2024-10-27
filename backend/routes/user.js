const express = require("express")
const zod = require("zod")
// const jwt = require("jsonwebtoken")
// const {authMiddleware} = require("../middleware")
// const { User, Account } = require("../db")
const router = express.Router()
// const {JWT_SECRET} = require("../config")



router.get("/testing", (req, res)=>{
    res.send("success")
})

const signupSchema = zod.object({
    username: zod.string().email(),
	firstName: zod.string(),
	lastName: zod.string(),
	password: zod.string()
})

// route added to /api/v1/user/signup 
router.post("/signup", async (req, res)=>{
    const body = req.body
    const {success} = signupSchema.safeParse(req.body)

    if(success){
        return res.status(411).json({
            message: "Incorrect input"
        })
    }

    res.status(200).json({
        message: "user signed up",
    })

    // const user = await User.findOne()

})


module.exports = router