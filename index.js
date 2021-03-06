import express from "express";
import bodyParser from "body-parser";
import adminRoutes from "./routes/admin.js"; 
import db from "./db.js";
const app = express();
const PORT = 5000;

// app.use(cors());
app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
      extended: true,
    })
);
  
db.connect(err=> {
    if(err){
        console.log('error', err);
    }
    console.log('Congratz.! Server connected...');
}); 

app.use('/admin', adminRoutes);

app.listen(PORT, ()=> console.log(`Server is Running on port ${PORT}. Welcome Ns to Port ${PORT}.`));