
const Intern = require('../model/Intern');

const getAll = async (req,res)=>{
try{
    const response = await Intern.find({});
    res.status(200).json(response);
}
catch(err)
{
    err.status(400).json({error:err.message});
}
};

const get = async (req,res)=>{
    try{
        const response = await Intern.find({_id:req.params.id});
        res.status(200).json(response);
    }
    catch(err)
    {
        err.status(400).json({error:err.message});
    }
};

const remove = async (req,res)=>{
    try{
        await Intern.findOneandRemove({_id:req.params.id});
        res.status(200).json();
    }
    catch(err)
    {
        err.status(400).json({error:err.message});
    }
};

const insert = async (req,res)=>{
    try{
        const response = await new Intern(req.body).save();
        res.status(200).json(response);
    }
    catch(err)
    {
        err.status(400).json({error:err.message});
    }
};

const update = async (req,res)=>{
    try{
        const response = await Intern.findOneandUpdate({_id:req.params.id});
        res.status(200).json(response);
    }
    catch(err)
    {
        err.status(400).json({error:err.message});
    }
};

const count = async (req,res)=>{
    try{
        const count = await Intern.count();
        res.status(200).json(count);
    }
    catch(err)
    {
        err.status(400).json({error:err.message});
    }
}

module.exports ={
    getAll,
    get,
    insert,
    update,
    count,
    remove
};


