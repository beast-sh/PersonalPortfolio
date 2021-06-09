var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var Expense = require('../../models/Expense');
var contact = require('../../models/Contact');
var nodemailer = require('nodemailer');
/*var JSAlert = require("js-alert");
const popup = require('node-popup');
const flash = require('express-flash-notification');*/
const Window = require('window');


router.get('/', function(req, res){
  res.render('index')
});
router.route('/insert')
.post(function(req,res) {
 var expense = new Expense();
  expense.name = req.body.name;
  expense.email = req.body.email;
  expense.password = req.body.password;
  expense.dateofbirth = req.body.dob;
  expense.age=req.body.age;
  expense.Gender = req.body.Gender;
  expense.qualification = req.body.qual;
  expense.CollegeName=req.body.clgname;
  expense.graduationyear=req.body.gy;
  expense.skills = req.body.skills;
  expense.Companyname = req.body.cmpname;
  expense.experience = req.body.exp;
  expense.designation = req.body.desg;
  expense.projects = req.body.proj;
  expense.certifications = req.body.cert;
  expense.freelance = req.body.flance;
  expense.mobilenumber = req.body.mno;
  expense.address = req.body.addr;
  expense.githubid = req.body.gid;
  expense.linkedinid = req.body.lid;
  Expense.find({$and: [ {email: req.body.email}]}, function(err, expenses) {
  if(expenses.length){
	res.send('user already exits Please Login!');
  }else{
	expense.save(function(err) {
      if (err)
          res.send(err);
        res.send('user successfully added!');
  });
  }
  });  
})

router.get('/login',function(req, res) {
  userList = []
 var monthRec = req.query.email;
 var yearRec = req.query.subject;
 var expense = new Expense();
 Expense.find({$and: [ {email: monthRec}, {password: yearRec}]}, function(err, expenses) {
   if (err)
    res.send(err);
   if(expenses.length){
      res.render("home", { 'list': expenses });
   }else{
     //JSAlert.alert("Please Check your emial and password.");
     //popup.alert('Please Check your email and password');
    // req.flash('info', 'invalid username or password');
      res.send("Invalid username and password");
   }
  
  });
 
});

router.route('/contact')
.post(function(req,res) {


 var cont = new contact();
 cont.name = req.body.name;
 cont.email = req.body.email;
 cont.sub = req.body.subject;
 cont.msg = req.body.message;
 
 cont.save(function(err) {
      if (err)
          res.send(err);
        res.send('Request Sent  successfully!');
      
  });
  let transporter = nodemailer.createTransport({
    port: 465,               
    host: "smtp.gmail.com",
       auth: {
            user: 'noreplypersonalportfolio',
            pass: 'Death1234@',
         },
    secure: true,
  })

  let mailOptions = {
      from: 'noreplypersonalportfolio',
      to: req.body.email,
      subject: req.body.subject,
      
      html:'<b>Concern Raised:'+req.body.subject+'<br><b>Deatils:<b/>'+req.body.message+'<br><b>Thank you for contacting us. We are looking into your concern.</b><br/>'
  }

  transporter.sendMail(mailOptions, function (err, res) {
      if(err){
          return console.log(err);
      } else {
           return console.log('Email Sent');
      }
  })

 
})

router.get("/logout", (req, res) => {
    
    res.redirect("/");
});


module.exports = router;