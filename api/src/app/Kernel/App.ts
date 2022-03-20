import AppConfig from "../../config/AppConfig";
import ConnectDB from "../../database/ConnectDB";
import express, {Express} from "express";
import { appConfig } from "../../config/types";
import bodyParser from "body-parser";
import log4js, {getLogger} from 'log4js'
import Auth from "../Http/Controllers/Auth";
import {requestsT} from "./types";

class App {
    protected appConfig: appConfig
    protected db: typeof import("mongoose")
    protected requests: requestsT
    protected server: Express
    protected logger: log4js.Logger

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
            this.requests = {
                _request: req,
                _response: res
            }
            next();
        });
    }
    private runRouter(){
        this.server.post('/registration', () => {
            new Auth(this.db, this.requests, this.logger).registration()
        })
    }
    private runLogger(){
        this.logger = getLogger();
        this.logger.level = "debug";
    }
}

export default App;