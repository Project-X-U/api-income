import { Schema, Types, model, Model } from 'mongoose';
import { SaveUsers } from '../interface/save-users';

const UserSheme = new Schema<SaveUsers>(
    {
        identification: {
            type: Number,
            required: true,
        },
        name_user: {
            type: String,
            required: true,
        },
        type_user: {
            type: String,
            required: true,
        },
        phone: {
            type: Number,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        program: {
            type: String,
            required: true,
        },
        schedule: {
            type: String,
            required: true,
        },
        state: {
            type: Boolean,
            required: true,
        },
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

const User = model("user", UserSheme);

export default User;