import mongoose from "mongoose";
import {dbConfig} from "../config/types";
import DBError from "../app/Exceptions/DBError";


class ConnectDB{
    private readonly db: dbConfig;
    constructor(config:dbConfig) {
        this.db = config
    }
    public async run(): Promise<typeof import("mongoose")> {
        try {
            return await mongoose.connect(this.db)
        } catch (e) {
            throw new DBError(`При попытке подключиться к бд: ${e}`)
        }
    }
}
export default ConnectDB


