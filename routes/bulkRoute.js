const express = require("express"),
mongoose = require("mongoose"),
bulkCheck = require("../model/bulkCheck");

const router= express.Router();

router.post("/",async(req,res)=>{
    try{
        console.log(req.body);
        const resp = await bulkCheck.insertMany(req.body.docs);
        return res.status(200).json({success:true, dataMessage : resp});
    }catch(err){
        return res.status(404).json({success:false, errorMessage : err.message});
    }
})

router.post("/update",async(req,res)=>{
    try{
        console.log(req.body);
        const arr = req.body.docs;

//


        let tempObj = {
            updateOne : {
                filter: { symbol: "", exchange:"" },
                update: { $set : { logo : "abcdef" } }
            }

        }

        let pushArr=[];

        for(let i=0; i<4; i++){

            tempObj.updateOne.filter.symbol=arr[i].symbol;
            tempObj.updateOne.filter.exchange=arr[i].exchange;

            tempObj.updateOne.update = { $set : { logo : i*2 } };
            let newObj={};
            // Object.assign(newObj,tempObj)
            newObj = JSON.parse(JSON.stringify(tempObj));
            //newObj = JSON.parse(newObj);

            pushArr.push(newObj);
        }

        console.log({pushArr})

       
        const respBulk = await bulkCheck.bulkWrite(pushArr,{"ordered": false, "writeConcern": 1});
        console.log({respBulk});


    //const resp = await bulkCheck.find({});
        return res.status(200).json({success:true, dataMessage : pushArr});
    }catch(err){
        return res.status(404).json({success:false, errorMessage : err.message});
    }
})

module.exports = router;