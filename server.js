var mysql = require("mysql");
var connection = mysql.createConnection({
	host	: "localhost",
	user	: "root",
	password: "",
	database: "control"
});

function timer1(data){
	var data = data;
	console.log("Timer 1 jalan 5 detik :", data);
	setTimeout(timer1, 5000);
	console.log("Timer 1 done");
}

function timer2(data){
	var data = data
	console.log("Timer 2 jalan 7 detik", data);
	setTimeout(timer2, 7000);
	console.log("Timer 2 done");
}

function dataGet(){
//	connection.connect();
	connection.query('SELECT * FROM tbl_control WHERE `id`=1;', function(err, rows, field){
		if(err) throw err;
		var array = [];
		var timer1 = rows[0].timer1;
		var timer2 = rows[0].timer2;
		array.push({
			"timer1" : timer1, 
			"timer2" : timer2
			});
		console.log(array);
		//setTimeout(dataGet, 1000);
		
	});
//	connection.end();
}

dataGet();
