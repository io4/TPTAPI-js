var http = require('http');
var config = require("config.js");
var private_key = config.config.private_key;
var ip = config.config.ip;
var public_key = config.config.public_key;
var cookie = config.config.cookie;
var url_redirect = config.config.url_redirect;
var login_redirect = config.config.login_redirect;
function session_create(private,session_id,ip_address)
{
	//This defines the URL for TPTAPI application checking and session creation.
	//It includes the information the function takes in and sends it with a URL!
	//DO NOT CHANGE THIS!!!
	var url = "http://TPTAPI.com/API_main.php?session_create&private_key="+private_key"+"&session_id="+token_id+"&ip="+ip";
	
	//Grabs the results from the submission of the information.
	var str = http.get(url);
	
	//Separates the results into a readable string.
	var str2 = str.split(",");
	
	//An error code, if none it will have 200.
	var network_code = str2[0];
	
	//Session key for the user is what it uses keep track fo valid logins
	var response = str2[1];
	
	//The username of the client
	var response_2 = str2[2];
	
	//These network codes may change in the future! Keep updated!
		if(network_code == 200){
		//Successful session creation
		
			//Creates the session key for the user as a cookie.
                        res.cookie('session_key',response, { maxAge: 900000, httpOnly: true });
			
			//Creates the cookie for their username
                        res.cookie('session_user',response2, { maxAge: 900000, httpOnly: true });
			
			//Custom cookies may go below here
			
			//Custom cookies end and the user is redirected to a page.
			res.send("<meta HTTP-EQUIV='REFRESH' content='0; url=$login_redirect'>");
		}else{
		//They are not logged in correctly and thus cancelled!
		
			//Bad request error
			res.send("Bad request!");
		}
}
function login_check(cookie,private)
{
	//URL for checking login or session takes the information we sent in through the function
	//and sends it again to TPTAPI.com's API main frame.
	var url = "http://TPTAPI.com/API_main.php?session_check&private_key="+private+"&session_id="+cookie;
	
	//Grabs file contents
	var str = http.get(url);
	
	//Sorts out error codes.
	if(str == 200)
	{
	//Returned a 200 code.
		//Logged in
		return TRUE;
	
	}else{
	//They are logged out or something is wrong
		//Logged out
		return FALSE;
		
	}
}
exports.session_create = session_create;
exports.login_check = login_check;