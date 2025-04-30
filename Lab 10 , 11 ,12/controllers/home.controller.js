const model = require("../models/home.model.js");
const bcrypt = require('bcryptjs');

module.exports.render_login = async(req,res) => {
    res.render('home/login', {
        registro: false
    });
}

module.exports.render_dash = async(req,res) =>{
    res.render("home/dash");
}