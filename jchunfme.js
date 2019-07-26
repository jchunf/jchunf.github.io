var http = require('http')
var server = http.createServer(function(request, response){
  response.setHeader('Content-Type','text/html;charset=utf-8')

	//response.write('<h1>你好</h1>')
  response.end()
})
server.listen(8000)