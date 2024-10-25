import http from 'http';

const server = http.createServer((req, res)=>{
    res.write("todolist API");
    res.end();
});

server.listen(3000);