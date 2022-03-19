import BaseController from "./BaseController";

class TestController extends BaseController{
    public test(){
        this.message(200, {message: this.server.get('req').body})
    }
}

export default TestController;