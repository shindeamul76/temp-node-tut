const http = require("http");


const server = http.createServer((req, res) => {

    if (req.url === "/home") {
        res.end("Welcome to the Home page")
    }
    if (req.url === "/about"){ 
    res.write("Welcome to NodeJs Session with Amul");
    res.end()
    }else {
        res.end(
            `<h1>Oops!!</h1>
            <p> Page not Found plese visite to
            back to home page <a to = "/home" /> </p>
            `
        )
    }  
})

server.listen(5000, () => {
    console.log("Seerver is up in port 5000");
})