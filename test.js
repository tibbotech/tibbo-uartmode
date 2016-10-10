var uartmode = require("./app.js");

var operation = process.argv[2];
var port = process.argv[3];
var mode = process.argv[4];

if(operation === "get" && port !== undefined){
    var currentMode = uartmode.getUartMode(process.argv[3]);
    console.log("Mode is: "+currentMode);
}else if(operation === "set" && port !== undefined && mode !== undefined){
    var result = uartmode.setUartMode(port, mode);
    if(result === true){
        console.log("Mode on port "+port+" successfully set to: "+mode);
    }else{
        console.log("Unable to set mode on port "+port);
    }
}else{
    console.log("Usage: node app get <port>\nor: node app set <port> <mode>\nwhere <port> is e.g. 'dev/ttyO3' and <port> is 485, 422 or 232")
}

/*    var port = process.argv[3];
    var operation = pr
    console.log(uartmode.getUartMode(port));*/
//}



/*var um = require("build/Release/tibbo-ua");

if ( process.argv.length < 3) {
  console.log( 'Usage: '+ process.argv[ 1] + ' <port>');
  process.exit( -1);
}
var port = process.argv[ 2];
console.log( 'port is:' + port);
var cur_mode =  um.tibbo_uartmode.G( port);
console.log( 'cur_mode:' + mode_out( cur_mode));
cur_mode = um.CuartMode232;
var ret = um.tibbo_uartmode.S( port, cur_mode);
console.log( 'setting:' + mode_out( cur_mode) + ' ret:' + ret);
cur_mode = um.CuartMode485;
var ret = um.tibbo_uartmode.S( port, cur_mode);
console.log( 'setting:' + mode_out( cur_mode) + ' ret:' + ret);
cur_mode =  um.tibbo_uartmode.G( port);
console.log( 'cur_mode:' + mode_out( cur_mode));

function mode_out( _mode) {
 switch ( _mode) {
   case um.CuartModeNaN: return( 'NaN');
   case um.CuartMode232: return( '232');
   case um.CuartMode422: return( '422');
   case um.CuartMode485: return( '485');
 }
}*/
