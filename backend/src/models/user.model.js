import mangoose from 'mongoose';

const useSchema = new mangoose.Schema(
    {
        email: {
            type: String,
            required: true,
            unique: true
        },
        fullName: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true,
            minLenght: 6
        },
        profilePic: {
            type: String,
            default: ""
        }
    },
    {
        timestamps: true
    }
);

const User = mangoose.model('User', useSchema);

export default User;