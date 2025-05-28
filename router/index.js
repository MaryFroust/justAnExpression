const express = require('express')
const router = express.Router()

// const index = express()

router.get('/', (req, res)=>{
  return  res.json({message: "Welcome to my App"})
})

module.exports = router
