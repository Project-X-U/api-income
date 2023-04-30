import { Schema, Types, model, Model } from "mongoose";
import { Equipment } from "../interface/equipment";

const EquipmentSheme = new Schema<Equipment>(
  {
    type_eq: {
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

const Equipment = model("equipment", EquipmentSheme);

export default Equipment;
