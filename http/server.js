const http = require('http')
const fs = require('fs')
const path = require('path')

http.createServer((req, res) => { /*RES é a resposta que o servidor vai me dar   REQ é a requisição do que eu vou fazer*/
   
    const file = req.url === '/' ? 'index.html' : req.url
    const filePath = path.join(__dirname, 'public', file)

    const allowedFileTypes = ['.html', '.css', '.js']
    const extname = path.extname(filePath)
    const allowed = allowedFileTypes.find(item => item ==  extname)

    if(!allowed) return
                         
        fs.readFile(
           filePath,
            (err, content) => {
                if (err) throw err

                res.end(content)
            }
        )
    
}).listen(5000, () => console.log('Server is running'))