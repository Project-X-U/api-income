import { Schema, Types, model, Model } from "mongoose";
import { SaveRegistrationEquipment } from "../interface/equipment";

const RegistrationEquipmentSheme = new Schema<SaveRegistrationEquipment>(
  {
    mark: {
      type: String,
      required: true,
    },
    serial: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      required: true,
    },
    user_id: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const RegistrationEquipment = model(
  "registrationEquipment",
  RegistrationEquipmentSheme
);

export default RegistrationEquipment;
