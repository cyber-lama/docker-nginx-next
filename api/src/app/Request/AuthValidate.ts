import BaseValidate from "./BaseValidate";

class AuthValidate extends BaseValidate{
    public registrationValidate(){
        this.rules = {
            email: 'required|email',
            password: 'required|min:6'
        }
        return this.validateFields()
    }
}

export default AuthValidate