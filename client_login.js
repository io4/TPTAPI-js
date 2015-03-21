var config=require('config.js');
var config = require("config.js");
var private_key = config.config.private_key;
var ip = config.config.ip;
var public_key = config.config.public_key;
var cookie = config.config.cookie;
var url_redirect = config.config.url_redirect;
var login_redirect = config.config.login_redirect;
function main(){
var login_redirect=config.config.login_redirect;
if(req.cookies.session_key){
	
	//Redirects them if they are already logged in!
	res.send("<meta HTTP-EQUIV='REFRESH' content='0; url="+login_redirect+"'>");
	
}elseif(isset($_GET['success'])){

	//Grabs the token id in which the user was sent with from TPTAPI
	var token_id = htmlspecialchars(addslashes($_GET['token_id']));
	
	//The session create function is called.
	session_create(private_key,token_id,ip)
	
}else{
	
	//They are not logged in to the application at all, they get redirected to login!
	res.send("<meta HTTP-EQUIV='REFRESH' content='0; url=http://TPTAPI.com/server_login.php?off_key="+public_key"&+url="+url_redirect+"'>");
	
}
}
exports.main = main;