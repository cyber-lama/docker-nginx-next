import express from 'express';
import {db, host, port} from "./configuration";

const app = express();


const startServer = () => {
  app.listen(port, () => {
    console.log(`Started api service on port: ${port}`)
    console.log(`On host: ${host}`)
    console.log(`Our db: ${db}`)
  })
}
app.get('/test', (req, res) => {
  res.send('test')
})
startServer()

// connectDB()
//     .on('error', () => console.log("err"))
//     .on('disconnected', connectDB)
//     .once('open', startServer)
