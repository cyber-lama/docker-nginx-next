import {Express} from "express/ts4.0";
import log4js from "log4js";
import Validator from 'validatorjs';


class BaseValidate {
    server: Express
    public logger?:log4js.Logger
    rules: {[key:string]:string}
    errorMessages: Record<string, unknown>
    constructor(server: Express, logger?:log4js.Logger) {
        this.server = server
        this.logger = logger
        this.run()
    }
    protected run (){
        this.errorMessages = {
            max: {
                string: 'Поле :attribute слишком длинное. Максимальная длинна :max.'
            },
            min: {
                string: 'Поле :attribute слишком короткое. Минимальная длинна :min.'
            },
            required: {
                string: 'Поле :attribute обязательно для заполнения.'
            },
            email: {
                string: 'Поле :attribute должно быть валидным email.'
            }
        }
    }

    public validateFields(): null | Record<string, unknown>{
        const validation = new Validator(this.server.get('req').body, this.rules, this.errorMessages);
        if(!validation.passes()) return validation.errors
        return null
    }
}

export default BaseValidate





