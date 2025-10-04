const express = require('express')
const router=express.Router();
const MenuItem=require('./../models/MenuItem')


router.get('/',async(req,res)=>{
  try{
    const data=await MenuItem.find();
    console.log('data fetched');
    res.status(200).json(data);
  }catch(err){
    console.log(err);
    res.status(500).json({error:'Internal Server Error'});
  }
});

router.post('/',async (req,res)=>{
  try{
     const data=req.body;
     const newMenu=new MenuItem(data);
     
     const menuResponse=await newMenu.save();
     console.log('data Saved');
     res.status(200).json(menuResponse)
  }catch(err){
      console.log(err);
      res.status(500).json({
        error:'Internal Server Error'
      });
  }
});

 router.get('/:tasteType', async(req,res)=>{
  try{
     const tasteType=req.params.tasteType;
     if(tasteType =='sweet' || tasteType=='spicy' || tasteType=='sour'){
      const response=await MenuItem.find({taste: tasteType});
      console.log('response fetched');
      res.status(200).json(response);
     }else{
      res.status(404).json({error:'Invalid work Type'});
     }
  }catch(err){
     console.log(err);
    res.status(500).json({error:'Internal Server Error'});
  }
})


module.exports=router;