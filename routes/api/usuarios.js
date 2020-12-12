const router = require('express').Router();
const {Usuario} =require('../../models');
const bcrypt =require('bcryptjs');
//const {User} = require('../../../../3/')

router.get('/' , async(req,res)=>{
    
    const user = await User.findAll()
    res.status(200).json(user)
});

module.exports=router;

