var run_server = require("./run_server");

if( process.argv.length > 2 ) {
  run_server(Number(process.argv[2]));
} else {
  console.log("Usage: node server.js <PORT>");
}
