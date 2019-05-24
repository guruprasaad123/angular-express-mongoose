
const User = require('../model/user');

const jwt = require('jsonwebtoken');

const getAll = async (req,res)=>{
    try{
        const response = await User.find({});
        res.status(200).json(response);
    }
    catch(err)
    {
        err.status(400).json({error:err.message});
    }
    };
    
    const get = async (req,res)=>{
        try{
            const response = await User.find({_id:req.params.id});
            res.status(200).json(response);
        }
        catch(err)
        {
            err.status(400).json({error:err.message});
        }
    };
    
    const remove = async (req,res)=>{
        try{
            await User.findOneandRemove({_id:req.params.id});
            res.status(200).json();
        }
        catch(err)
        {
            err.status(400).json({error:err.message});
        }
    };
    
    const insert = async (req,res)=>{
        try{
            const response = await new User(req.body).save();
            res.status(200).json(response);
        }
        catch(err)
        {
            err.status(400).json({error:err.message});
        }
    };
    
    const update = async (req,res)=>{
        try{
            const response = await User.findOneandUpdate({_id:req.params.id});
            res.status(200).json(response);
        }
        catch(err)
        {
            err.status(400).json({error:err.message});
        }
    };
    
    const count = async (req,res)=>{
        try{
            const count = await User.count();
            res.status(200).json(count);
        }
        catch(err)
        {
            err.status(400).json({error:err.message});
        }
    }
    
 const  login = (req, res) => {
    this.model.findOne({ email: req.body.email }, (err, user) => {
      if (!user) { return res.sendStatus(403); }
      user.comparePassword(req.body.password, (error, isMatch) => {
        if (!isMatch) { return res.sendStatus(403); }
        const token = jwt.sign({ user: user }, process.env.SECRET_TOKEN); // , { expiresIn: 10 } seconds
        res.status(200).json({ token: token });
      });
    });
  }

    
module.exports ={
    getAll,
    get,
    insert,
    update,
    count,
    remove,
    login
};


