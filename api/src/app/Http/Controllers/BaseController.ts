import {Express} from "express/ts4.0";
import {statusCodeError, statusCodeSuccess} from "./types";
import log4js from "log4js";

class BaseController{
    public logger?:log4js.Logger
    db: typeof import("mongoose")
    server: Express
    constructor(db: typeof import("mongoose"), server: Express, logger?:log4js.Logger) {
        this.db = db
        this.server = server
        this.logger = logger
    }

    public respond (code: statusCodeSuccess | statusCodeError, data: Record<string, unknown>){
        this.server.get('res')
            .status(code)
            .setHeader('content-type', 'application/json')
            .send(data)
    }
    public message (code: statusCodeSuccess, data: Record<string, unknown>){
        this.respond(code, data)
    }
    public error (code: statusCodeError, data: Record<string, unknown>){
        this.respond(code, data)
    }
}

export default BaseController