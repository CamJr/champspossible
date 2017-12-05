import mongoose from 'mongoose';

export default (callback) => {
    mongoose.connect(process.env.MONGODB_URI || 'mongodb://heroku_qtsch1bk:heroku_qtsch1bk@ds115131.mlab.com:15131/heroku_qtsch1bk');
    callback();
};
