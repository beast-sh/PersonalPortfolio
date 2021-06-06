var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var Expense = require('../../models/Expense');
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
expense.save(function(err) {
      if (err)
          res.send(err);
        res.send('user successfully added!');
  });
})
/*router.route('/update')
.post(function(req, res) {
 const doc = {
     description: req.body.description,
     amount: req.body.amount,
     month: req.body.month,
     year: req.body.year
 };
 console.log(doc);
  Expense.update({_id: req.body._id}, doc, function(err, result) {
      if (err)
        res.send(err);
      res.send('Expense successfully updated!');
  });
});
router.get('/delete', function(req, res){
 var id = req.query.id;
 Expense.find({_id: id}).remove().exec(function(err, expense) {
  if(err)
   res.send(err)
  res.send('Expense successfully deleted!');
 })
});*/
router.get('/login',function(req, res) {
  userList = []
 var monthRec = req.query.email;
 var yearRec = req.query.subject;
 var expense = new Expense();
 Expense.find({$and: [ {email: monthRec}, {password: yearRec}]}, function(err, expenses) {
   if (err)
    res.send(err);
   
   res.render("home", { 'list': expenses });
  });
 
});

/*// show login form
router.get("/login", (req, res) => res.render("login", { page: "login" }));

// login logic: app.post("/login", middleware, callback)
router.post("/login", (req, res, next) => {
    passport.authenticate("local", (err, user, info) => {
        if (err) { return next(err); }
        if (!user) {
            req.flash("error", "Invalid username or password.." + err);
            return res.redirect('login');
        }
        req.logIn(user, err => {
            if (err) { return next(err); }
            let redirectTo = req.session.redirectTo ? req.session.redirectTo : '/';
            delete req.session.redirectTo;
            req.flash("success", "Good to see you again, " + user.name);
            res.redirect(redirectTo);
        });
    })(req, res, next);
});*/



module.exports = router;