import {appConfig} from "./types";

abstract class BaseConfig {
    abstract config: appConfig;
    abstract setConfig(conf:Record<string,unknown>) : void;
    getConfig(): appConfig {
        return this.config
    }
}

export default BaseConfig;