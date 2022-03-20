import {Express} from "express/ts4.0";
import {statusCodeError, statusCodeSuccess} from "./types";
import log4js from "log4js";
import {requestsT} from "../../Kernel/types";

class BaseController{
    public logger?:log4js.Logger
    public db: typeof import("mongoose")
    public requests: requestsT
    constructor(db: typeof import("mongoose"), requests: requestsT, logger?:log4js.Logger) {
        this.db = db
        this.requests = requests
        this.logger = logger
    }

    public respond (code: statusCodeSuccess | statusCodeError, data: Record<string, unknown>){
        this.requests._response
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