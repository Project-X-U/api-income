import "dotenv/config";
import app from "./app/app";
import db from "./config/mongo";

const PORT = process.env.PORT || 5000;

db().then(() => {
  console.log("Conexion ready");
});


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT} 🚀`);
});
