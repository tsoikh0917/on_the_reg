// import modules
import bodyParser from 'body-parser'
import cors from 'cors'
import express from "express"
import http from "http"
import https from "https"
import fs from "fs"
import cookieParser from 'cookie-parser'



// import routes
import postRoutes from './routes/itemslist.js'
import categoryRoutes from './routes/category.js'
import itemRoutes from './routes/item.js'
import userRoutes from './routes/user.js'
import refreshRoutes from './routes/refresh.js'


const app = express()
const devPort = 8080
const port = 8000
const corsOptions = {
  origin: ['http://localhost:3000', 'https://localhost:8080', 'http://localhost:8000', 'https://localhost:8000'],
  credentials: true,            //access-control-allow-credentials:true
}

// middleware
app.use(bodyParser.json({ limit: "1mb", extended: true }))
app.use(bodyParser.urlencoded({ limit: "1mb", extended: true }))
app.use(cors(corsOptions))
app.use(cookieParser())

// api routes path
app.use('/auth', postRoutes)
app.use('/waitlist', categoryRoutes)
app.use('/class', itemRoutes)
app.use('/course', userRoutes)
app.use('/admin', refreshRoutes)

var httpServer = http.createServer(app);

// for local port 8080
httpServer.listen(divPort, () => {
  console.log(`Example app listening on port ${divPort}`)
})

var httpsServer = https.createServer({
  key: fs.readFileSync('./forSSL/secure.s69.ierg4210.ie.cuhk.edu.hk.key'),
  cert: fs.readFileSync('./forSSL/secure_s69_ierg4210_ie_cuhk_edu_hk.crt')
}, app);

httpsServer.listen(8000, () => {
  console.log(`HTTPS Server running on port ${8000}`);
});
