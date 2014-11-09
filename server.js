var mysql = require("mysql");
var time = require("moment");

var connection = mysql.createConnection({
	host	: "localhost",
	user	: "root",
	password: "",
	database: "home"
});

function dataGetRoomA(){
//	connection.connect();
	connection.query('SELECT * FROM tbl_room_a WHERE `id`=1;', function(err, rows, field){
		if(err) throw err;
		var array = [];
		array.push({
			"lampA1" : rows[0].lampA1, 
			"lampA2" : rows[0].lampA2, 
			"lampA1TimerStatus" : rows[0].lampA1TimerStatus,
                        "lampA1TimerStart" : rows[0].lampA1TimerStart,
                        "lampA1TimerStop" : rows[0].lampA1TImerStop,
                        "lampA2TimerStatus" : rows[0].lampA2TimerStatus,
                        "lampA2TimerStart" : rows[0].lampA2TimerStart,
                        "lampA2TimerStop" : rows[0].lampA2TImerStop
			});
//		console.log(array);
                timerRoomA(array);
		setTimeout(dataGetRoomA, 1000);
		
	});
//	connection.end();
}

function timerRoomA(data){
    var now = time();
    if(data[0]["lampA1TimerStatus"]==="on"){
        var lampA1TimerStart = time(data[0]["lampA1TimerStart"],"H:m:s");
        var lampA1TimerStop = time(data[0]["lampA1TimerStop"],"H:m:s");
        var lampA1 = data[0]["lampA1"];
        
        if(now.hour() < lampA1TimerStart.hour()){
            if(lampA1 !== "off"){
                var post  = {'lampA1': 'off'};
                connection.query('UPDATE tbl_room_a SET ? WHERE `id` = 1', post, function(err, result) {
                });
            }
        }
        else if(now.hour() >= lampA1TimerStart.hour() && now.hour() <= lampA1TimerStop.hour()){
            
            if(now.minute() >= lampA1TimerStart.minute() && now.minute() < lampA1TimerStop.minute()){
                if(lampA1 !== "on"){
                    var post  = {lampA1: 'on'};
                    connection.query('UPDATE tbl_room_a SET ? WHERE `id` = 1', post, function(err, result) {
                    });
                }
            }
            else if(now.minute() < lampA1TimerStart.minute()){
                if(lampA1 !== "off"){
                    var post  = {lampA1: 'off'};
                    connection.query('UPDATE tbl_room_a SET ? WHERE `id` = 1', post, function(err, result) {
                    });
                }
            }
            else if(now.minute() >= lampA1TimerStop.minute()){
                if(lampA1 !== "off"){
                    var post  = {lampA1: 'off'};
                    connection.query('UPDATE tbl_room_a SET ? WHERE `id` = 1', post, function(err, result) {
                    });
                }
            }
        }
        else if(now.hour() > lampA1TimerStop.hour()){
            if(lampA1 !== "off"){
                var post  = {lampA1: 'off'};
                connection.query('UPDATE tbl_room_a SET ? WHERE `id` = 1', post, function(err, result) {
                });
            }
        }
    }
    
    if(data[0]["lampA2TimerStatus"]==="on"){
        var lampA2TimerStart = time(data[0]["lampA2TimerStart"],"H:m:s");
        var lampA2TimerStop = time(data[0]["lampA2TimerStop"],"H:m:s");
        var lampA2 = data[0]["lampA2"];
        
        if(now.hour() < lampA2TimerStart.hour()){
            if(lampA2 !== "off"){
                var post  = {'lampA2': 'off'};
                connection.query('UPDATE tbl_room_a SET ? WHERE `id` = 1', post, function(err, result) {
                });
            }
        }
        else if(now.hour() >= lampA2TimerStart.hour() && now.hour() <= lampA2TimerStop.hour()){
            
            if(now.minute() >= lampA2TimerStart.minute() && now.minute() < lampA2TimerStop.minute()){
                if(lampA2 !== "on"){
                    var post  = {lampA2: 'on'};
                    connection.query('UPDATE tbl_room_a SET ? WHERE `id` = 1', post, function(err, result) {
                    });
                }
            }
            else if(now.minute() < lampA2TimerStart.minute()){
                if(lampA2 !== "off"){
                    var post  = {lampA2: 'off'};
                    connection.query('UPDATE tbl_room_a SET ? WHERE `id` = 1', post, function(err, result) {
                    });
                }
            }
            else if(now.minute() >= lampA2TimerStop.minute()){
                if(lampA2 !== "off"){
                    var post  = {lampA2: 'off'};
                    connection.query('UPDATE tbl_room_a SET ? WHERE `id` = 1', post, function(err, result) {
                    });
                }
            }
        }
        else if(now.hour() > lampA2TimerStop.hour()){
            if(lampA2 !== "off"){
                var post  = {lampA2: 'off'};
                connection.query('UPDATE tbl_room_a SET ? WHERE `id` = 1', post, function(err, result) {
                });
            }
        }
    }
    
}
dataGetRoomA();