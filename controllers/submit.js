const Form = require('../models/database')
const express = require('express')

exports.submitting=async(req,res)=>{
    try {
        const data = req.body;
    const Formdata = await Form.create(data);
    res.status(200).json({
        message:"success",Formdata
    })
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message:"error"
        })
    }
    
}