const express = require('express');
const moongose = require('mongoose');
const fileUpload = require('express-fileupload');
const methodOverride = require('method-override');
const ejs = require('ejs');
const Photo = require('./models/Photo');
const photoControllers = require('./controllers/photoControllers')
const pageControllers = require('./controllers/pageControllers')

const app = express();

// Connect DB
moongose.connect('mongodb://127.0.0.1:27017/pcat-test-db', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Template Engine
app.set('view engine', 'ejs');

// MIDDLEWARES
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(fileUpload());
app.use(methodOverride('_method',{
  methods:['POST','GET']
}));

// ROUTES
app.get('/', photoControllers.getAllPhotos);
app.get('/photos/:id', photoControllers.getPhoto);
app.put('/photos/:id', photoControllers.updatePhoto);
app.post('/photos', photoControllers.createPhoto);
app.delete('/photos/:id', photoControllers.deletePhoto);



app.get('/about', pageControllers.getAboutPage);
app.get('/add',  pageControllers.getAddPage);
app.get('/photos/edit/:id',pageControllers.getEditPage);



const port = 3000;
app.listen(port, () => {
  console.log(`Sunucu ${port} portunda başlatıldı.`);
});
