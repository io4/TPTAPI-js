var config={}
var config.private_key = "PRIVATE API KEY";
var config.public_key = "PUBLIC API KEY";
var config.cookie=req.cookies.session_key;
var config.ip = req.ip;
var config.expire=;
var config.url_redirect = "http://[YOUR DOMAIN NAME]/client_login";
var config.login_redirect = "members";
exports.config = config;