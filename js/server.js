const http = require("http");
const server = http.createServer();
server.listen(8080);
server.on("listening", function() {
    console.log("监听中");
});
server.on("request", (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By", ' 3.2.1');
    res.header("Content-Type", "application/json;charset=utf-8");
    let obj = { name: "王大", age: 18 }
    res.write(obj);
    res.end();
})