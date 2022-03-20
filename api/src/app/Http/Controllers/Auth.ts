import BaseController from "./BaseController";
import AuthValidate from "../../Request/AuthValidate";
import userSchema from "../../Models/User";
import User from "../../Models/User";

class Auth extends BaseController{
    public registration(){
        const validateErrors = new AuthValidate(this.requests, this.logger).registrationValidate()
        if(validateErrors){
            this.logger.warn(`Ошибки валидации ${JSON.stringify(validateErrors)}`)
            return this.error(422, validateErrors);
        }

        this.logger.info(`Успешно прошли валидацию ${JSON.stringify(this.requests._request.body)}`)
        const user = new User
        user.createUser(this.requests._request.body)
        this.logger.info(User.getAllUsers())
        this.message(200, this.requests._request.body);
        return
    }
}

export default Auth