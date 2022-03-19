import {Express} from "express/ts4.0";
import {statusCode} from "./types";

class BaseController{
    public logger?
    db: typeof import("mongoose")
    server: Express
    constructor(db: typeof import("mongoose"), server: Express) {
        this.db = db
        this.server = server
    }

    public respond (code: statusCode, data: Record<string, unknown>){
        this.server.get('res')
            .status(code)
            .setHeader('content-type', 'application/json')
            .send(data)
    }
    public message (code: statusCode, data: Record<string, unknown>){
        this.respond(code, data)
    }
    public error (code: statusCode, data: Record<string, unknown>){
        this.respond(code, data)
    }
}

export default BaseController