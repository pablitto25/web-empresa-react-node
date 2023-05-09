import express from 'express';
import cors from 'cors';
import db from './database/db.js';
import imgRoutes from './routes/imgRoutes.js';
import brandsRoutes from './routes/brandsRoutes.js';
import ourteamRoutes from './routes/ourteamRoutes.js';
import hubsRouter from './routes/hubsRoutes.js';
import multer from 'multer';

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use(express.static('uploads'));


const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/images/')
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname)
  }
})

const upload = multer({ storage: storage })


app.use(cors());
app.use(express.json());
app.use('/imgs', imgRoutes);
app.use('/brands', brandsRoutes);
app.use('/ourteam', ourteamRoutes);
app.use('/hubs', hubsRouter);


app.post('/upload', upload.single('file'), (req, res) => {
    res.status(200).send('File uploaded successfully');
  });



try {
    db.authenticate();
    console.log('Database connection Success');
} catch (error) {
    console.log(`Database Connection failed ${error}`);
}

const PORT = 8000;

app.listen(PORT, ()=>{
    console.log('Server Up in http://localhost:8000/');
});