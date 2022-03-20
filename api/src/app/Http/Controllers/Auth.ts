import BaseController from "./BaseController";
import AuthValidate from "../../Request/AuthValidate";

class Auth extends BaseController{
    public registration(){
        const validateErrors = new AuthValidate(this.server, this.logger).registrationValidate()
        if(validateErrors){
            this.logger.warn(`Ошибки валидации ${JSON.stringify(validateErrors)}`)
            return this.error(422, validateErrors);
        }

        this.logger.info("Успешно прошли валидацию")
        return
    }
}

export default Auth