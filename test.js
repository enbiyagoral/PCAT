const moongose = require('mongoose');
const Schema = moongose.Schema;

// Connect DB
moongose.connect('mongodb://127.0.0.1:27017/pcat-test-db',{
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// Create Schema

const PhotoSchema = new Schema({
  title: String,
  description: String,
});

const Photo = moongose.model('Photo', PhotoSchema);

// create a photo
Photo.create({
  title: 'Photo Title 2',
  description: 'Photo description 2 lorem ipsum',
});

