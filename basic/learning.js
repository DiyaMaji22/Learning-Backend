const http=require('http')
const server=http.createServer((req,res) => {
    if(req.url=='/about')
    {
        res.end("This is the about page");
        console.log("We added an /about in our url")
    }
    else{
        res.end("hello World");
        console.log("Not added anything");
    }
})


server.listen(8000, () => {
    console.log('HTTP Server running on http://localhost:8000');
});




