const { Router } = require("express");
const compiesSchema = require('../model/companies')
const comp_e = require('../model/employee')
const router = Router();

 module.exports={
    async homedata(req,res){
        try{
            const name = await compiesSchema.paginate()
            // console.log(name.docs[0].name)
           return  res.render('home',{name:name})
        }
        catch (err) {
            console.log(err);
            res.status(500).send("Server Error");
          }
    },


    async compdetails(req,res){
        try{
            const {para}=req.params
            const ename = await comp_e.paginate({comp_id:para})
            // console.log(ename.docs[0].e_comp_details[0].join_date)
            return res.render('home',{ename:ename})
        }
        catch (err) {
            console.log(err.message);
            res.status(500).send("Server Error");
          }
    }
 }
