import "dotenv/config";
import app from "./app/app";
//import db from "./config/mongo";
import saveData from './routes/save';

const PORT = process.env.PORT || 5000;


// db().then(() => {
//   console.log("Conexion ready");
// });

app.use('/api/save',saveData);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT} 🚀`);
});
