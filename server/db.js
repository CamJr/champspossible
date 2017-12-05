import mongoose from 'mongoose';

export default (callback) => {
    mongoose.connect(process.env.MONGOLAB_URI || 'mongodb://<dbuser>:<dbpassword>@ds115131.mlab.com:15131/heroku_qtsch1bk');
    callback();
};
