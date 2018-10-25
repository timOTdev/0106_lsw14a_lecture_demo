const server = required('./server.js')

server.listen(port, () => console.log(`\n==Port ${port} is online==\n`))