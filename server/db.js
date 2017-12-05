import mongoose from 'mongoose';

export default (callback) => {
    mongoose.connect(process.env.MONGOLAB_URI || 'mongodb://localhost:27017/champsdupossible');
    callback();
};
