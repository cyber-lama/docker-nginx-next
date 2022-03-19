import {appConfig, dbConfig} from "./types";
import BaseConfig from "./BaseConfig";

class AppConfig extends BaseConfig{
    public config: appConfig
    constructor() {
        super();
        this.config = {
            ...{port:process.env.PORT, host: process.env.HOST, db:process.env.MONGO_URL}
        }
    }
    setConfig(conf){
        this.config = {...this.config, conf}
    }
}


export default AppConfig;