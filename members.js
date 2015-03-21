//////////////////////////////////////////////////
//                 TPTAPI.com                   //
//           This is your check page!           //
//           For help go to the wiki.           //
//////////////////////////////////////////////////

//Requires the TPTAPI.php file to use the functions contained.
var api=require('tptapi.js');
var config = require("config.js");
var private_key = config.config.private_key;
var ip = config.config.ip;
var public_key = config.config.public_key;
var cookie = config.config.cookie;
var url_redirect = config.config.url_redirect;
var login_redirect = config.config.login_redirect;
function main(){
//Calls the session check function with the user's cookie and your Private API Key
var checked_log = api.login_check(cookie,private_key);

//Checks the boolean. Whether they were logged in or not
if(checked_log!=TRUE)
{
	//Not logged in. Boolean is FALSE
	res.send("You are not logged in!");
	
}else{

	//Logged in. Boolean is TRUE
	res.send("You are logged in!");
	
}
}
exports.main = main;