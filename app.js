var express = require("express"),
    bodyParser= require("body-parser"),
    app       = express();
const {PythonShell} = require("python-shell");
var sys = require('sys');
var player = require('play-sound')(opts = {});
var spawn = require("child_process").spawn;
 const puretext = require('puretext');
/*var player = require('play-sound')({player: "C:/Users/sarth/Downloads/mplayer.exe"});
 


var baudio = require('baudio');
var play = require('audio-play'),
    load = require('audio-loader');

*/
app.use(bodyParser.urlencoded({extended : true}));
app.set("view engine", "ejs");
app.use(express.static(__dirname));

app.get("/", function(req, res){
 res.render("home")
});
app.post('/k', function(req, res) {
   
  var options = {
  mode: 'text',
 // pythonPath: "C:/Users/hp/Anaconda3-2/python.exe",
  pythonPath:"C:/Users/sarth/AppData/Local/Continuum/anaconda3/python.exe",
  pythonOptions: ['-u'],
  scriptPath: './',
  args: ['-p','shape_predictor_68_face_landmarks.dat']
};

var shell = new PythonShell('main_drowsy.py', options);
shell.on('message', function (message) {
    console.log(message);
    if(message=='1')
    {
        //alarm'
      //  soundManager.url = '/path/to/swf-files/';

    // create player instance
// play now and callback when playend
 
       console.log("OH LOL!");

      res.render("stop");
    }
 // res.render("result", {message: message, claim: claim, says:says});
// console.log("hii");

});

});
app.post('/k1', function(req, res) {
  let text = {
      // To Number is the number you will be sending the text to.
      toNumber: '+91-971-181-5027',
      // From number is the number you will buy from your admin dashboard
      fromNumber: '+91-812-734-2651',
      // Text Content
      smsBody: 'Sending SMS using Node.js',
      //Sign up for an account to get an API Token
      apiToken: 'c3152e'
  };

  puretext.send(text, function (err, response) {
    if(err) console.log(err);
    else console.log(response)
  })

   });
app.listen(3000, "localhost", function(err){
    console.log("Server on duty, Mallady!");
});