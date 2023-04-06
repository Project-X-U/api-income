"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const app_1 = __importDefault(require("./app/app"));
const mongo_1 = __importDefault(require("./config/mongo"));
const save_1 = __importDefault(require("./routes/save"));
//const PORT = process.env.PORT || 5000;
const PORT = 5000;
(0, mongo_1.default)().then(() => {
    console.log("Conexion ready");
});
app_1.default.use('/api/save', save_1.default);
app_1.default.listen(PORT, () => {
    console.log(`Server running on port ${PORT} 🚀`);
});
