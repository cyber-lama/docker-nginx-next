import AppConfig from "../../config/AppConfig";
import ConnectDB from "../../database/ConnectDB";
import express from "express";
import { appConfig } from "../../config/types";
import {Express} from "express/ts4.0";
import TestController from "../Http/Controllers/TestController";
import bodyParser from "body-parser";
import log4js, {getLogger} from 'log4js'
class App {
    protected appConfig: appConfig
    protected db: typeof import("mongoose")
    protected server: Express
    protected logger:  log4js.Logger
    constructor() {
        this.appConfig = new AppConfig().getConfig()
        // запускам db, если успешно, запускаем сервер
        this.runDB()
            .then(() => this.run())
            .catch(e => console.log(e))
    }
    private async runDB(){
        if(typeof (this.appConfig.db) === "string"){
            this.db = await new ConnectDB(this.appConfig.db).run()
        }
    }
    private async run() {
        this.runServe()
        this.runRouter()
        this.runLogger()
    }
    private runServe() {
        this.server = express()
        this.server.listen(this.appConfig.port, () => {
            console.log(`App is running at ${this.appConfig.host}:${this.appConfig.port}`);
        });
        this.server.use(bodyParser.json())
        // добавляем в глобальный объект req и res
        this.server.use((req, res, next) => {
            this.server.set('req', req)
            this.server.set('res', res)
            next();
        });
    }
    private runRouter(){
        this.server.post('/test', () => {
            new TestController(this.db, this.server).test()
        })
        this.server.post('/let', () => {
            new TestController(this.db, this.server).test()
        })
    }
    private runLogger(){
        this.logger = getLogger();
        this.logger.level = "debug";
    }
}

export default App;