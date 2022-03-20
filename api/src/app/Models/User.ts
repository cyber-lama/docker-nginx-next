import mongoose,{Schema} from 'mongoose'


class User extends mongoose.Model{
    static createUser(payload){
        this.create(payload)
    }
    static getAllUsers(){
        return this.findOne()
    }
}

const userSchema = new Schema({
    email: String,
    password: String
});
userSchema.loadClass(User);

export default User;