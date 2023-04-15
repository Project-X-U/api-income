import {Schema, Types, model, Model} from 'mongoose';
import {SaveEquipments} from '../interface/save-equipment';

const EquipmentSheme = new Schema<SaveEquipments>(
    {
        type_eq: {
            type: String,
            required: true,
        },
        color: {
            type: String,
            required: true,
        },
        mark: {
            type: String,
            required: true,
        },
        serial: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

const EquipmentModel = model("equipment", EquipmentSheme);

export default EquipmentModel;