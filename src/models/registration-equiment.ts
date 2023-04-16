import {Schema, Types, model, Model} from 'mongoose';
import {SaveRegistrationEquipment} from '../interface/save-registration-equiment';

const RegistrationEquipmentSheme = new Schema<SaveRegistrationEquipment>(
    {
        serial: {
            type: String,
            required: true,
        },
        login_day: {
            type: String,
            required: true,
        },
        login_hour: {
            type: String,
            required: true,
        },
        loginout_hour: {
            type: String,
            required: true,
        },
        
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

const RegistrationEquipment = model("registrationEquipment", RegistrationEquipmentSheme);

export default RegistrationEquipment;