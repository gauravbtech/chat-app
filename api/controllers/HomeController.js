/**
 * HomeController
 *
 * @description :: Server-side logic for managing homes
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	saveDetails: function (req, res) {
		console.log('Hello GK"');
		var mysql      = require('mysql');
		var connection = mysql.createConnection({
			host     : 'us-cdbr-iron-east-04.cleardb.net',
			user     : 'b28812d048a235',
			password : '8a07c11a',
			database : 'heroku_67bca853788ef8b'
		});
		//console.log("req : " +JSON.stringify(req.body));
		console.log("req : " +req.param('a'));

		
		var items		= req.body;
		var userName 	= req.param('a');
		var firstName 	= req.param('b');
		var lastName 	= req.param('c');
		var gender		= req.param('d');
		var intrestedIn	= req.param('e');
		var notification= req.param('f');
		var Password 	= req.param('g');
		var userType	= 1;
		
			
		connection.connect(function(err) {
			if (err) {
				console.error('error connecting: ' + err.stack);
				return;
			}
			 
			console.log('connected as id ' + connection.threadId);
		});
			
		connection.query('call usp_chatUserDetailsAdd(?,?,?,?,?,?,?)',[userName,firstName,lastName, gender,intrestedIn,notification,Password], function(err, rows, fields) {
			if (err) throw err;
			//res.json(JSON.parse(JSON.stringify(rows)));
			res.json('Your Registration is Done With the details: \n'+userName+" : "+firstName+" : "+lastName+" : "+gender+" : "+intrestedIn+" : "+notification+" : "+Password);

		});
			 
		connection.end();
		//res.location('/login1');
	}
	
};

