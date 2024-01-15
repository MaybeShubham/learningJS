const http = require("http");
const port = 3000;

const sever = http.createServer(function (req, res) {
  res.write("hello world");
  res.end();
});

sever.listen(port, function (error) {
  if (error) {
    console.log("something went wrong", error);
  } else {
    console.log("server is listening on port" + port);
  }
});
