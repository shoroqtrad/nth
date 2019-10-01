const url = require('url')
const fs = require('fs')
module.exports =routing;
function handlerequest(filepath,response){
    fs.readFile('./index.html',null,(error,data)=>{
        if (error)
        response.end('this page error')
        else
        response.end(data)
    })
}
function routing (Request,response){
    const path = url.parse(Request.url).pathname
    console.log(path)
    switch (path) {
    case '/':
        handlerequest('./index.html',response)
        break;
    case '/user':
        response.end('main page')
    break;
    case '/any':
        response.end('any page')
    break;
    default:
        response.end('this not page you want ')
        break;
}
}
